const webpack = require('webpack')
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

function getConfig(env, config) {
  const isProduction = config && config.mode === 'production'
  const isDevServer = config && config.inline

  const cssModuleLoader = {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[local]__[hash:base64:5]',
      minimize: isProduction
    }
  }

  const postCSSLoader = {
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [postcssPresetEnv()]
    }
  }

  const devServerPort = 8080

  const result = {
    entry: './src/index.jsx',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' }
        },
        {
          test: /\.html$/,
          use: [{ loader: 'html-loader' }]
        },
        {
          test: /(atoms|components)(.*)\.scss$/,
          use: [MiniCssExtractPlugin.loader, cssModuleLoader, postCSSLoader, 'sass-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devServer: {
      contentBase: './dist',
      port: devServerPort,
      proxy: {
        '/products': {
          logLevel: 'debug',
          changeOrigin: true,
          target: 'https://api.gousto.co.uk',
          secure: false
        }
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
        hash: isProduction,
        minify: {
          collapseWhitespace: isProduction,
          html5: true,
          removeComments: isProduction,
          removeEmptyAttributes: true,
          minifyCSS: isProduction
        }
      }),
      new DynamicCdnWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          PRODUCTS_API_URL: JSON.stringify(
            process.env.PRODUCTS_API_URL || (isDevServer ? `http://localhost:${devServerPort}` : 'https://api.gousto.co.uk')
          )
        }
      })
    ]
  }

  if (isProduction) {
    result.plugins.push(
      new OptimizeCssAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }]
        },
        canPrint: true
      })
    )
  }

  return result
}
module.exports = getConfig

const webpack = require('webpack')
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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

  return {
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
          test: /(components|atoms)(.*)\.scss$/,
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
        filename: './index.html'
      }),
      new DynamicCdnWebpackPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
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
}
module.exports = getConfig

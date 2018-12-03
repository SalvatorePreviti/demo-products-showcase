# Products Showcase

React/redux base example application.
Components are all stateless, all the state is maintained in the single global store.

The application is divided in:

- _atoms_ - pure react components, stateless and free to reuse
- _components_ - stateless components connected to the store
- _domain_ - the store, actions, reducers, API calls

The production packages used are:

- `react`, `react-dom`, `prop-types` for building react components
- `redux` and `react-redux` for the state management
- `cross-fetch` to provide a polyfill for `fetch` in browsers that don't support it (Internet Explorer for example)

The most notable development packages are:

- `eslint` and `prettier` for code formatting and static code verification
- `webpack`, `babel`, `sass` are used to transpile and bundle the application.
- `webpack-dev-server` is used to run the application locally.
- `node-sass`, `postcss` for SCSS modules, every component has is own isolated CSS classes.
- `jest`, `nock`, `enzyme` are used for unit testing and snapshot testing.
- `dynamic-cdn-webpack-plugin` is used to not bundle react, redux dependencies but instead use plublic CDNs automatically. For this reason, the bundled total size is around 20kb

### Install packages and start the dev server

```sh
npm install
npm start
```

Open the browser to `http://localhost/8080`.
There is no need to install a plugin to disable the cross origin restriction because the APIs are proxied by the development server.

### Unit test

```sh
jest
```

During development, to update the snapshots, run `jest -u`

### JavaScript linter

```sh
npm run lint
```

### Production build

```sh
npm run build:prod
```

Output will be generated in the `dist` folder

### For a list of available commands

```sh
npm run
```

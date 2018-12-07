# Products Showcase

React/redux base example application.
Components are all stateless, all the state is maintained in the single global store.

See [Project documentation](./doc/README.md)

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

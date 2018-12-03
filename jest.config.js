module.exports = {
  transform: {
    '^.+\\.(js|jsx|ts)$': 'babel-jest',
    '.+\\.(scss)$': '<rootDir>/node_modules/jest-css-modules-transform'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['./jest.setup.js']
}

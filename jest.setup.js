// Polyfill for Internet Explorer and other browsers that don't support 'fetch'
// https://github.com/lquixada/cross-fetch
require('cross-fetch/polyfill')

const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

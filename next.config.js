const withCSS = require('@zeit/next-css')
const withProgressBar = require('next-progressbar')

module.exports = withCSS({
  cssModules: true
})
module.exports = withProgressBar()
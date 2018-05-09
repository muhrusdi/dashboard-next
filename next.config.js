/* eslint-disable */
const withCss = require('@zeit/next-css')

if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}

module.exports = withCss(
  {
    exportPathMap: function(defaultPathMap) {
      return {
        '/': { page: '/' },
        '/blogs': { page: '/blogs' }
      }
    }
  }
)
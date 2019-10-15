module.exports = {
  httpurl: process.env.VUE_APP_HTTP,
  gethttp: function(item, url) {
    return new Promise(function(resove, reject) {
      resove(item + url)
    })
  }
}

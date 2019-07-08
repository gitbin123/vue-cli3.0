module.exports = {
  httpurl: process.env.NODE_ENV == 'project' ? '10.95.3.60' : '155.356.321',
  gethttp: function(item, url) {
    return new Promise(function(resove, reject) {
      resove(item + url)
    })
  }
}

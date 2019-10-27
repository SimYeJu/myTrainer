var config = require('config');
var http = require('http');

module.exports.function = function launchWeb (youtubeURL) {
  let options = {
    query: {
      searchKeyword : youtubeURL
    },
    format : "json"
  };
  // let result = http.getUrl(config.get('remote.url') + 'youtube/searchKeyword', options);
  // if(result.url == undefined){
  //   var console = require('console');
  //   console.log("Not enable to use Youtube API");
  // }
  return {
    youtubeURL : youtubeURL
  };
}
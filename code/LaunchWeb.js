// module.exports.function = function launchWeb (youtubeurl) {
//   const tData = require("./data/Training.js");
//   const console = require("console");

//   /*------ 디버깅용 ------*/
//   if (youtubeurl == null)
//     console.log("youtubeURL is null")
//   else {
//     console.log('youtubeURL is ' + youtubeurl);
//   }

//   console.log(youtubeurl);
//   console.log("LaunchYoutube URL...");
//   var result = {youtubeurl:youtubeurl}
//   console.log("result is "+result.youtubeurl);
//   return result;
// }

module.exports.function = function launchWeb (refurl) {
  const tData = require("./data/Training.js");
  const console = require("console");

  /*------ 디버깅용 ------*/
  if (refurl == null)
    console.log("refurl is null")
  else {
    console.log('refurl is ' + refurl);
  }

  console.log(refurl);
  console.log("Launchweb URL...");
  var result = {youtubeurl:refurl}
  console.log("result is "+result.refurl);
  return result;
}

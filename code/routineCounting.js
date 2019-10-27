module.exports.function = function routineCounting (rName) {
  const console = require('console');
  const rData = require("./data/Routine.js");

  if(rName == null){
    console.log("routineName is null");
  }else{
     console.log("routineName : " + rName);
  }

  /*------ 선언부 ------*/
  let results = [];
  var re = 3;
  /*------ 실행 ------*/

  // for(let i = 0; i < rData.length; i++) {
  //   if(rData[i].rName.match(rName)) {
  //     results.push(rData[i]);
  //   }
  // }
  
  return re;

  // console.log(results);
  // console.log("###RoutineCounting() end...");
  // return results;
}
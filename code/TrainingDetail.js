module.exports.function = function trainingDetail (tName) {
  const tData = require("./data/Training.js");
  const console = require("console");

  /*------ 디버깅용 ------*/
  if (tName == null)
    console.log("tName is null")
  else {
    console.log("tName : " + tName);
    console.log("tName.length : " + tName.length)
  }

  /*------ 선언부 ------*/
  let results = [];
  
  /*------ 실행 ------*/
  for(let i = 0; i < tData.length; i++) {
    if(tData[i].tName==tName) {
      results.push(tData[i]);
    }
  }

  console.log(results);
  console.log("###TrainingDetail() end...");
  return results;
}

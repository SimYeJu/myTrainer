module.exports.function = function trainingDescription (tName) {
  const tData = require("./data/Training.js");
  const console = require("console");

  /*------ 디버깅용 ------*/
  if (tName == null)
    console.log("trainingName is null")
  else {
    console.log("trainingName : " + tName);
    console.log("trainingName.length : " + tName.length)
  }

  /*------ 선언부 ------*/
  let results = [];
  
  /*------ 실행 ------*/
  tName = tName.replace(/(\s*)/g, "") ;
  for(let i = 0; i < tData.length; i++) {
    if(tData[i].tName.replace(/(\s*)/g, "").match(tName)) {
      results.push(tData[i]);
    }
  }

  console.log(results);
  console.log("###TrainingDescription() end...");
  return results;
}

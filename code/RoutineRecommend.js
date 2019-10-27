module.exports.function = function routineRecommend (routineName) {

  const tempDatas = require("./data/Training.js");
  const console = require("console");

  /* --- --- */
  if(routineName == null){
    console.log("routineName is null");
  } else {
    console.log("routineName : "+routineName);
    console.log("routineName.length : "+routineName.length);
  }

  for(let i = 0; i<tempDatas.length; i++){
    if(tempDatas[i].rName == routineName){
      console.log("설명: "+tempDatas[i].rDesc);
      return tempDatas[i];
    }
  }

  console.log(results);
  console.log('trainingRecommend is end...');
  // return {}

  // const console = require('console');
  // console.log('this is routineRecommend');
  
  // if(routineName == null){
  //   console.log('routineName is null')
  //   return result = null;
  // } else {

  // }
  //routineName과 같은 루틴명을 routine_table에서 찾고
  


  //routineTable에서 routineName의 추천

  return {
    results: 'result'
  }
}






module.exports.function = function trainingCount(tName, requireSet) {

  const console = require('console');
  const tData = require("./data/Training.js");

  //requireSet의 유무에 따라 기존 perSet으로 카운트할지 require된 Set으로 카운트할지 정해야한다.
  var idx;

  if (tName == null) {
    console.log("tName is null")
  } else {
    for (var i = 0; i < tData.length; i++) {
      if (tData[i].tName == tName) {
        idx = i;
        break;
      }
    }
    var tmp = 0;

    console.log("[idx] : " + idx);
    console.log("tData[idx].tName : " + tData[idx].tName);
    let tname = tData[idx].tName; console.log("tname:" + tname);
    let tno = tData[idx].tNo; console.log("tno:" + tno);
    let perset = tData[idx].perSet; console.log("perset:" + perset);
    let setnum = tData[idx].setNum; console.log("setnum:" + setnum);
    let hasdir = tData[idx].hasDir; console.log("hasdir:" + hasdir);
    let day = tData[idx].day; console.log("day:" + day);
    let cal = tData[idx].kcal; console.log("cal:" + cal);
    let cnt = tData[idx].cnt; console.log("cnt:" + cnt);

    let speech = "";

    var Num = ["하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉", "열",
      "열하나", "열둘", "열셋", "열넷", "열다섯", "열여섯", "열일곱", "열여덟", "열아홉", "스물", "스물하나"];
    speech += tname + "한세트 카운트 시작합니다.。。。";

    if (hasdir.match("true")) {
      for (var i = 0; i < perset; i++) {
        speech += Num[i];
        for (var j = 0; j < cnt; j++) {
          speech += "。"
        }
      }

      speech += "。。。반대 방향 카운트 시작하겠습니다.。。。。。。"
      
      for (var i = 0; i < perset; i++) {
        speech += Num[i];
        for (var j = 0; j < cnt; j++) {
          speech += "。"
        }
      }
    } else {

      

      for (var i = 0; i < perset; i++) {
        speech += Num[i];
        for (var j = 0; j < cnt; j++) {
          speech += "。"
        }
      }

      //세트수만큼 더해주기
      // for (var i = 0; i < setnum; i++) {
      //   speech += speech;
      // }
    }
    speech += "。。。한세트가 완료되었습니다. 일분정도 휴식을 취해주세요."

    if(cnt)
    console.log("speech" + speech);

    // let speech = "둘。둘。둘。둘。둘。둘。둘。둘。둘。둘。둘。둘。둘。둘。";
    // let speech = "둘。。둘。。둘。。둘。。둘。。둘。。둘。。"; //1개 == 2개 약 0.7 ~ 0/8초
    // let speech = "둘。。。둘。。。둘。。。둘。。。둘。。。둘。。。둘。。。"; //3개 1.50초 약 1.5초
    // let speech = "둘。。。。둘。。。。둘。。。。둘。。。。둘。。。。둘。。。。둘。。。。"; //4개 2.3초 
    // let speech = "둘。。。。。둘。。。。。둘。。。。。둘。。。。。둘。。。。。둘。。。。。둘。。。。。"; //5개 3초
    // let speech = "둘。。。。。。둘。。。。。。둘。。。。。。둘。。。。。。둘。。。。。。둘。。。。。。둘。。。。。。"; //6개 3.7초
    // let speech = "둘。。。。。。。둘。。。。。。。둘。。。。。。。둘。。。。。。。둘。。。。。。。둘。。。。。。。둘。。。。。。。"; //7개 3.7초

  }

  return {
    tName: tname,
    tNo: tno,
    perSet: perset,
    setNum: setnum,
    hasDir: hasdir,
    day: day,
    kcal: cal,
    cnt: cnt,
    requireSet: requireSet,
    countingNumber: tmp,
    speech: speech
  };
}

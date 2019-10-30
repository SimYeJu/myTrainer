module.exports.function = function trainingCount(tName) {

  const console = require('console');
  const tData = require("./data/Training.js");

  var idx;

  if (tName == null) {
    console.log("tName is null")
  } else {
    for (var i = 0; i < tData.length; i++) {
      if (tData[i].tName.match(tName)) {
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
      "열하나", "열둘", "열셋", "열넷", "열다섯", "열여섯", "열일곱", "열여덟", "열아홉", "스물", "스물하나",
      "스물둘", "스물셋", "스물넷" , "스물다섯", "스물여섯", "스물일곱", "스물여덟", "스물아홉", "서른",
      "서른하나", "서른둘", "서른셋", "서른넷", "서른다섯", "서른여섯", "서른일곱", "서른여덟", "서른아홉", "마흔",
      "마흔하나", "마흔둘", "마흔셋", "마흔넷", "마흔다섯", "마흔여섯", "마흔일곱", "마흔여덟", "마흔아홉", "쉰", 
      "쉰하나", "쉰둘", "쉰셋", "쉰넷", "쉰다섯", "쉰여섯", "쉰일곱", "쉰여덟", "쉰아홉", "예순",
      "예순하나", "예순둘", "예순셋", "예순넷", "예순다섯", "예순여섯", "예순일곱", "예순여덟", "예순아홉", "일흔"];
    speech += tname + "한 세트 카운트 시작합니다.。。。";

    /*
    。
    1개 == 2개 => 0.75초
    3개 => 1.5초
    4개 => 2.25초
    5개 => 3초
    6개 => 3.75초
    7개 => 4.5초
    8개 => 
    */
    let calcnt = Math.ceil(Number(((cnt/0.75)+1)));
    console.log("calcnt : " + calcnt);

    if (hasdir.match("true")) {
      for (var i = 0; i < perset; i++) {
        speech += Num[i];
        for (var j = 0; j < calcnt; j++) {
          speech += "。"
        }
      }

      speech += "。。。반대 방향 카운트 시작하겠습니다.。。。。。。"
      
      for (var i = 0; i < perset; i++) {
        speech += Num[i];
        for (var j = 0; j < calcnt; j++) {
          speech += "。"
        }
      }
    } else {

      

      for (var i = 0; i < perset; i++) {
        speech += Num[i];
        for (var j = 0; j < calcnt; j++) {
          speech += "。"
        }
      }

      //세트수만큼 더해주기
      // for (var i = 0; i < setnum; i++) {
      //   speech += speech;
      // }
    }
    speech += "。。。한세트가 완료되었습니다. 일분정도 휴식을 취해주세요."

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
    countingNumber: tmp,
    speech: speech
  };
}

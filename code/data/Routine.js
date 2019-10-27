module.exports = [ //Routine Table
	//Start of 아침 루틴
  {
    rName: "아침",
    rNo: "R01",
    rTime: "아침",
    rDesc: "아침에 하면 아주 굳",
    rEffect: "좌뇌가 활성화 되고 우뇌를 활성화시켜 몸의 기상을 하게 해줌",
    formula: [
      {tNo: "T01"
      ,multiple: "1/2"
      ,seq: ["2","0"]},
    ],
    keywords: "아침,피곤,잠 깨기",
    refURL: "www.naver.com",
    youtubeURL: "youtube.com",
  },
  //End of 아침 루틴
  //Start of 점심 루틴
  {
    rName: "점심",
    rNo: "R02",
    rTime: "점심",
    rDesc: "점심에 하면 아주 굳",
    rEffect: "밥먹고 소화 도와줌",
    formula: [
      {tNo: "T01"
      ,multiple: "0.5"
      ,seq: ["2","0"]},
      {tNo: "T02"
      ,multiple: "1/3"
      ,seq: ["2","1"]},
    ],
    keywords: "점심먹고,점심,소화,근이득",
    refURL: "www.naver.com",
    youtubeURL: "youtube.com",
  },
  //End of 아침 루틴
  {
    rName: "하루20분전신운동",
    rNo: "R03",
    rTime: "점심,아침",
    rDesc: "매일매일 20분씩 투자해서 건강을 유지하자!",
    rEffect: "만성피로가 해결되고 건강해집니다.",
    formula: [
      {tNo: "T37"
      ,multiple: "1"
      ,seq: ["7","0"]},
      {tNo: "T37"
      ,multiple: "1"
      ,seq: ["7","4"]},
      {tNo: "T32"
      ,multiple: "1"
      ,seq: ["5","0"]},
      {tNo: "T07"
      ,multiple: "0.5"
      ,seq: ["5","0"]}
    ],
    keywords: "전신운동,20분",
    refURL: "www.naver.com",
    youtubeURL: "youtube.com",
  },
  {
    rName: "SLP챌린지",
    rNo: "R04",
    rTime: "저녁",
    rDesc: "쉽고 간편하게 할 수 있는 한달 도전!!",
    rEffect: "체지방 제거와 코어/하체 라인 생성에 도움이 됩니다.",
    formula: [
      {tNo: "T07"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T07"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T07"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T08"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T08"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T08"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T14"
      ,multiple: "0.5"
      ,seq: ["3","0"]},
      {tNo: "T14"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T14"
      ,multiple: "1"
      ,seq: ["3","2"]},
    ],
    keywords: "스쿼트,런지,플랭크,플스런",
    refURL: "www.naver.com",
    youtubeURL: "youtube.com",
  },
  {
    rName: "비키니 30일 완성",
    rNo: "R05",
    rTime: "저녁",
    rDesc: "올 여름 바다에서 비키니에 도전한다면!",
    rEffect: "복부 라인과 힙 라인을 잡아 완벽한 비키니 라인을 만들어줍니다.",
    formula: [
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["3","0"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["3","0"]},
      {tNo: "T38"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T25"
      ,multiple: "1"
      ,seq: ["3","1"]},
      {tNo: "T06"
      ,multiple: "1"
      ,seq: ["3","2"]},
      {tNo: "T22"
      ,multiple: "1"
      ,seq: ["3","2"]},
    ],
    keywords: "여름,수영장,수영복,휴가,비키니",
    refURL: "www.naver.com",
    youtubeURL: "youtube.com",
  },
  {
    rName: "30일만에 식스팩 만들기 복근운동",
    rNo: "R06",
    rTime: "저녁",
    rDesc: "슬슬 나오기 시작하는 배가 신경쓰인다면!",
    rEffect: "복부 체지방을 컨트롤 할 수 있는 유산소 운동과 복근강화 운동을 통해 식스팩을 만드는데 효과적입니다.",
    formula: [
      {tNo: "T39"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T24"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["4","1"]},
      {tNo: "T39"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T24"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["4","2"]},
      {tNo: "T39"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T05"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T24"
      ,multiple: "1"
      ,seq: ["4","3"]},
      {tNo: "T10"
      ,multiple: "1"
      ,seq: ["4","3"]},
      
    ],
    keywords: "식스팩,복근,수영복",
    refURL: "www.naver.com",
    youtubeURL: "youtube.com",
  },
]
/*

피티 점프 T01
벤치 딥스 T02
슈퍼맨 T03
니 푸쉬업 T04
크런치 T05
버피 T06
스쿼트 T07
런지 T08
브릿지 T09
사이드 플랭크 T10
점핑잭 T11
스위밍 T12
버피 점프 T13
플랭크 T14
더블 니업 T15
글루트 킥백 T16
바이시클 T17
와이드 스쿼트 T18
스탠딩 힙 어브덕션 T19
브릿지 원래그 T20
스쿼트 홀드 T21
마운틴클라이머 T22
오블리크 크런치 T23
레그레이즈 T24
점프 스쿼트 T25
사이즈 런지 T26
시티드 벤치 니업 T27
굿모닝 엑서사이즈 T28
쇼트 피치 T29
동키 카프레이즈 T30
사이드 탭 T31
프런트 런지 T32
사이드 플랭크 레그리프트 T33
스쿼트 점핑잭 T34
라잉 힙 어브덕션 T35
핸드킥 T36
가벼운 유산소 운동 T37
[추가]
푸쉬업 T38
윗몸일으키기 T39

 */
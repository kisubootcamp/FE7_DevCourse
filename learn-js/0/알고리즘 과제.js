function tollgate(obj) {
  let total = 0;
  for (idx in obj) {
    switch (obj[idx]) {
      case "tollgateA":
        total += 2000;
        break;
      case "tollgateB":
        total += 2300;
        break;
      case "tollgateC":
        total += 3000;
        break;
      case "tollgateD":
        total += 700;
        break;
      case "tollgateE":
        total += 4000;
        break;
      default:
        console.log("잘못된 정보를 입력하셨습니다.");
        break;
    }
  }

  return console.log(total);
}

tollgate({ 상윤: "tollgateA", 준영: "tollgateB", 주원: "tollgateC" });
tollgate({
  레나: "tollgateA",
  선혜: "tollgateC",
  기수: "tollgateC",
  프그: "tollgateE",
});
tollgate({ 네이버: "tollgateA", 카카오: "tollgateA", 라인: "tollgateA" });

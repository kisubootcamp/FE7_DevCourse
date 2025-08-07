// if -> 표현식으로 조건을 처리할 때 사용
// switch -> 값으로 조건을 처리할 때 사용
// switch case break default
// fall through
const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("사과");
    break;
  case "banana":
    console.log("비니니");
    break;
  case "orange":
    console.log("오렌지");
    break;
  default:
    console.log("사과도 바나나도 오렌지도 아닙니다");
}

const day = "토요일";
switch (day) {
  case "토요일":
  case "일요일":
    console.log("주말입니다.");
    break;
  default:
    console.log("평일입니다.");
}

// if -> 표현식으로 조건을 처리할 때 사용합니다.
// switch -> 값으로 조건을 처리할 때 사용합니다.
// switch, case, break, default
// fall through
const fruit = "orange";
switch (fruit) {
  case "apple":
    console.log("사과입니다.");
  case "banana":
    console.log("바나나입니다.");
  case "orange":
    console.log("오렌지입니다.");
  default:
    console.log("사과도 바나나도 오렌지도 아닙니다");
}

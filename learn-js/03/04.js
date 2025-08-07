// if -> 표현식으로 처리할 때 사용합니다.
// switch -> 값으로 조건을 처리할 때 사용합니다.
const fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("사과입니다.");
    break;
  case "banana":
    console.log("바나나입니다.");
  default:
    console.log("사과도 바나나도 아닙니다.");
    break; //굳이 안 써도 됨
}

const day = "토요일";

switch (day) {
  case "토요일":
  case "일요일":
    console.log("주말입니다.");
    break;
  default:
    console.log("평일입니다.");
    break;
}
//이런 식으로 의도적으로 흘러가서 2개의 요일이 되는 로직도 가능

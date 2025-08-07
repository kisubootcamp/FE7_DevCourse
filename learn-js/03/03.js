// if -> 표현식으로 조건 처리할 때 사용
// switch -> 표현식으로 조건 처리할 때 사용

// switch, case, break, default

const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("사과쓰");
    break;
  case "banana":
    console.log("바나나쓰");
    break;
  case "orange":
    console.log("오렌쥐쓰");
    break;
  default:
    console.log("아무것도 아님쓰");
}

// fall through -> break가 없을 때?? 케이스에 해당하는거 실행하고 default도 실행함
const day = "토요일";
switch (day) {
  case "토요일":
  case "일요일":
    console.log("주말입니다");
    break;
  default:
    console.log("평일입니다.");
}
// 이렇게하면 토요일인 케이스를 통과하여 일요일 케이스에 멈추고 break

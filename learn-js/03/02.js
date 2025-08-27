/*

if -> 표현식으로 조건 처리

switch -> 값으로 조건 처리
switch, case, break, default

*/

const fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("사과입니다");
    break;
  // switch에 break가 없으면?
  // 이후 case까지 계속 실행 -> fall through
  default:
    break;
}

const day = "토요일";

switch (day) {
  // 의도적으로 fall through를 이용해서 이렇게 작성하기도 함
  case "토요일":
  case "일요일":
    console.log("주말입니다");
    break;
  default:
    console.log("평일입니다");
    break;
}

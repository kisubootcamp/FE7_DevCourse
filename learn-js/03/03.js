// 2. switch문

// if문 -> 표현식으로 조건을 처리할 때 사용
// switch문 -> 값으로 조건을 처리할 때 사용

// (0) 구조

// ** switch statement 단축키 사용 가능 -> 구조 생성
// switch, case, break, default
const fruits = "apple";
switch (fruits) {
  case "apple":
    console.log("사과입니다.");
    break;
  // case-break는 set
  case "peach":
    console.log("복숭아입니다.");
    break;
  case "orange":
    console.log("오렌지입니다.");
    break;
  default:
    console.log("과일입니다.");
  // 맨 아래 위치, break; 생략 가능
}

// (1) fall through (쭉 떨어짐)
// break; 가 없다면, apple(일치하는 case)을 실행되도 다음 것들이 실행되는 것

// ** 의도적 사용 가능 -> 가독성 증가

const day = "토요일";
switch (day) {
  case "토요일":
  case "일요일":
    console.log("주말입니다.");
    break;
  default:
    console.log("평일입니다.");
}

// 조건문
// 1. if문

// 기본 틀
if (조건식) {
  // 조건식 참이면 실행
  // 거짓이면 실행 X
  // ** 조건식을 반드시 T/F 로 결론을 내리려고 함
  // if문 안의 코드가 한 줄이면 {} 생략 가능
}
// * if 조건식 === false :: ESLint(React의 defult) 에서 문법적 오류

const age = 20;

// (1)
// 삼항연산자 -> 조건에 따른 내용을 변수에 담을 때
// 조건문 -> 변수에 담을 필요 없을 때, 실행만 하면 될 때

// const message = age >= 18 ? "성인입니다" : "";
// const message = age >= 18 && "성인입니다";
if (age >= 18) {
  console.log("성인입니다");
} else {
  console.log("미자입니다");
}

// (2)
// else는 단독 사용 불가, if 앞에 사용 불가 (가장 마지막에 사용 가능)
// if(age >=18){} if(age < 18){} 와 같은 구조
if (age >= 18) {
  console.log("성인입니다");
}
if (age < 18) {
  console.log("미자입니다");
}
// ** 둘 다 사용 가능 (개발자 성향) but, if(1)->if(2)는 두 조건식을 모두 실행 / if-else는 if로 판단되면 else 확인 x (성능 차이는 미비)

// (3) else if
const product = "가방";
if (product === "가방") {
  console.log("가방 로직");
}
// if -> else if -> else 순서, else if/else 는 선택
else if ((product = "옷")) {
  console.log("옷 로직");
} else {
  console.log("기타 로직");
}

// (4) 중첩 if문
// 제한 없음, 얼마든지 중첩 가능

const user = "admin";
const pw = "1234";

if (user === "admin") {
  if (pw === "1234") {
    console.log("로그인 성공");
  } else {
    console.log("로그인 실패");
  }
} else {
  console.log("아이디를 확인해주세요.");
}

const age = 10;
//const message = age >= 18? "성인입니다.": "미성년자 입니다."
//const message = age >= 18? "성인입니다.": "미성년자 입니다."

if (age >= 18) {
  console.log("성인입니다.");
} //age<18
else {
  console.log("미성년자 입니다.");
}

//else로 인한 코드 실행 단축의 성능은 미비하다.

const product = "가방";
if (product === "가방") {
  console.log("가방 로직.");
} else if (product === "옷") {
  console.log("옷 로직.");
} else if (product === "신발") {
  console.log("신발 로직.");
} else if (product === "반지") {
  console.log("반지 로직.");
} else {
}

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

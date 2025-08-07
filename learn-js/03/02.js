const age = 20;
// const message = age >= 18 ? "성인입니다" : "";
const message = age >= 18 && "성인입니다";

if (age >= 18) {
  console.log("성인입니다");
}
if (age < 18) {
  console.log("미성년자입니다");
}

if (age >= 18) {
  console.log("성인입니다");
} else {
  console.log("미성년자입니다");
}

console.log(message);

const product = "가방";
if (product === "가방") {
  console.log("가방 로직");
} else if (product === "옷") {
  console.log("옷 로직");
} else if (product === "신발") {
  console.log("신발 로직");
} else if (product === "반지") {
  console.log("반지 로직");
}


// 0, false, null, "", undefined
const user = "admin";
const pw = "1234";

if (user === "admin") {
  if (pw === "1234") {
    console.log("로그인 성공!");
  } else {
    console.log("로그인실패!");
  }
} else {
  console.log("아이디를 확인해주세요");
}

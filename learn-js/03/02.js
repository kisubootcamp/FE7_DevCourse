if (false) {
  console.log("참"); //참이면 실행됨
}
const age = 10;
//const message = age >= 18 ? "성인입니다" : "";
//console.log(message);

if (age >= 18) {
  console.log("성인입니다");
} else {
  console.log("미성년자입니다");
}

const product = "가방";
if (product === "가방") {
  console.log("가방 로직");
} else if (product === "옷") {
  console.log("옷 로직");
} else if (product === "신발") {
  console.log("신발 로직");
} else if (product === "반지") {
  console.log("반지 로직");
} else {
  console.log("기타 로직");
} // if 문에서 if는 항상 처음으로 else 는 마지막

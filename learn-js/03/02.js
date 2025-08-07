if (false) {
  console.log("참");
}

const message = age >= 18 && "성인입니다."; // 이렇게 하면 "성인입니다"가 나옴, 연산자가 true 이면, 오른 쪽에 있는 애가 변수에 담겨지기 때문
console.log(message);

if (age >= 18) {
  console.log("성인입니다.");
} else {
  console.log("미성년자입니다.");
}

// if (age < 18) {
//   console.log("미성년자입니다.");
// }

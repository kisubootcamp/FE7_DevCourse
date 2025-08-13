// 함수의 매개 변수
// 매개 변수는 정의에 대한 의무가 없다.
// 가변 인자 함수 (ES5)
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  console.log(result);
  // console.log(arguments); // 유사 배열 객체
  // console.log(arguments[0]);
  // console.log(arguments[1]);
  // console.log(arguments.length);
}
sum(10, 20); // 10 + 20 + undefined

// 함수(function)  / 메서드(method)
const obj = {
  name: "sucoding",
  greet: function () {
    console.log("greet");
  },
};

obj.greet();

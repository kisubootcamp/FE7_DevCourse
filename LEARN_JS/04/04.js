// 함수의 매개 변수
// 매개 변수는 정의에 대한 의무가 없다.
// 가변 인자 함수,
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  console.log(result);
}
sum(10, 20);

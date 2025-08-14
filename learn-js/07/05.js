// 함수 팩토리
// 함수를 만들어내는 기능을 하는 함수

function makeMultiple(multiple) {
  return function (x) {
    return x * multiple;
  };
}
const double = makeMultiple(2);
console.log(double(5)); // 10;
double = null;

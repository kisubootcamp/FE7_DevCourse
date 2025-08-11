/*

호이스팅
선언을 최상위로 끌어올리는 현상
let, const는 호이스팅이 안 되는 게 아니라, 되긴 하지만 초기화가 해당 라인에 되기 전까지 하지 않는 것 -> TDZ

함수 선언식, 표현식에 따라 호이스팅 방식도 다름
함수의 경우 기본적으로 호이스팅


*/

var num = 5;
console.log(num); // 5

function num() {
  return 10;
}

console.log(num); // 5
console.log(num()); // 에러: 함수가 아님

var num;
function num() {
  return 10;
}
num = 5; //여기서 num이 다시 변수로 할당 되면서
console.log(num);

console.log(num);
console.log(num()); // 이게 더 이상 함수가 아니게 됨

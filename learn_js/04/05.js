// 나머지 매개변수
// ... -> 스프레드 연산자
function sum(num1, num2, ...nums) {
  console.log(num1, num2);
  console.log(nums);
}
sum(10, 20);

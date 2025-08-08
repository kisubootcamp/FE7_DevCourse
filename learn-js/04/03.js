//나머지 매개변수
//나머지 매개변수를 먼저 쓰면 안됨
function sum(num1, num2, ...nums) {
  console.log(num1, num2);
  console.log(nums);
}
sum(10, 20, 30, 40);

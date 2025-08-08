// 나머지 배개변수(ES6)
// ... 스프레드 연산자
function sum(num1, ...nums) {
  // 나머지 매개변수는 항상 마지막에 와야하고, 1개만 지정 가능 (num1, num2, ...nums)
  console.log(nums);
  console.log(num1);
}

sum(1, 2);
sum(1, 2, 3);

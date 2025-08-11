// 나머지 매개변수
// ... 스프레드 연산자
function sum(num1, num2, ...nums) {
	console.log(num1, num2);
	console.log(nums);
}
// 처리되지 못한 매개변수는 나머지 매개변수에 저장이 됨
// sum(...nums, num1) -> 매개변수가 먼저 오게하면 구현못함
sum(10, 20, 30, 40);
// 10 20
// [ 30, 40 ]
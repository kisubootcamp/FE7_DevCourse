// 함수 표현식으로 적기
function sum(num1, num2) {
	return num1 + num2;
}

// 이렇게 적어도 되지만?
const sum2 = (num1, num2) => {
	return num1 + num2;
};
// 이렇게 작성해도 똑같다. 즉시 반환해버리기
const sum3 = (num1, num2) => num1 + num2;
console.log(sum3(10, 20));
// 그런데 객체를 리턴하려면?
const returnValue = () => ({
	name: "sang",
});

console.log(returnValue());

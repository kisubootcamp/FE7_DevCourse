// 스코프 (Scope), 변수가 유효한 범위
// 함수 스코프 - 변수가 유효한 범위는 함수 내부. 외부에서 함수 내부 변수 호출해도 안 나옴
function sum(num1, num2) {
	const result = num1 + num2;
	console.log(result);
	{
		// 블록시작
		let x = 10;
		var y = 10;
	} // 블록끝
	// console.log(x); // 여기서도 오류남. x는 블록의 블록{}안에서 선언했기 때문에
	// 자바스크립트는 함수스코프이기도 하면서 블록스코프이다.
	console.log(y); // 이건 전역?변수라 나옴
}
sum(10, 20);

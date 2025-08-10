function gugudan3() {
	for (let i = 1; i <= 9; i++) {
		console.log(`3 x ${i} = ${3 * i}`);
	}
}
gugudan3();
// 3단만 호출할 때는 이렇게 하면 되는데 다른 단도 쓰고싶다면?

function gugudan(dan) {
	for (let i = 1; i <= 9; i++) {
		console.log(`${dan} x ${i} = ${dan * i}`);
	}
}
gugudan(2);
// 여기서 dan 은 매개변수. (parameter)
// gugudan(9); 이렇게 9 넣는거는 인자, 인수 (argument)

// 매개변수는 갯수제한 없이 전달할 수 있으나, 보통 5개까지만 넣는 것을 권장
function sum(num1, num2) {
	console.log(num1 + num2);
}
sum(1, 2);
sum(1, 2, 3, 4, 5); // 이거도 위와 같이 출력이 됨. 왜?
// 매개변수는 정의에 대한 의무가 없다.
// 전달한다한들 정해진 것만 딱 쓰고 안 써버림
// 인자 값을 활용하지 못할 뿐

sum(1);
// 1 + undefined
// NaN 노출. 수학적인 계산을 할 수 없음
// 정의를 하면 값을 어쨌든 넣어줘야하는데 안넣으면? 흠냐링

// 가변 인자 함수(ES5 까지 많이 사용하는 방법)
function sum2() {
	console.log(arguments);
	// 내부적으로 arguments 라는 값이 감춰져있음.
	// [Arguments] { '0': 10, '1': 20 } 이렇게 출력됨
	// 객체처럼 보임... 근데 인덱스가 0, 1임
	// arguments.0 숫자로 선택할 수가 없어!! []로 선택해야함 -> 요런 객체를 `유사 배열 객체`라고 함
	console.log(arguments[0]); // 10
	console.log(arguments[1]); // 20
	// 객체처럼 생겼지만 배열처럼 사용가능한 객체 : 유사 배열 객체
	// arguments는 그중에 하나

	// 다른분 질문 - 함수 내부에서 arguments에 값을 직접 대입할 수 있는지?
	// 할수는 있지만, 굳이 arguments를 대입하진않는다
}
sum2(10, 20);

function sum3() {
	let result = 0;
	// for (let i = 0; i < arguments.length; i++) {
	//   result += ele;
	// }
	for (const ele of arguments) {
		result += ele;
	}
	console.log(result);
}

sum3(10, 20);

// 다른분 질문 - 함수 외부에서 sum.arguments로 속성 호출 가능한지?
console.log(sum3.arguments);
// 접근은 할 수 있지만 출력이 안됨. 이미 sum3의 호출은 끝나버렸기때문에

// 함수(function) / 메서드(method)
const obj = {
	name: "sanga",
	greet: function () {
		console.log("greet");
	},
};
// 객체 속성에 함수가 지정되어 있는 경우를 메서드라고 함
obj.greet(); // obj의 greet 메서드를 호출했다

console.dir(function () {});

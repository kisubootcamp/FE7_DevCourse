// 클로저. 클로저함수
// 함수가 선언될 때의 렉시컬 스코프(=환경)를 기억하고, 그 스코프(=환경)에 있는 변수에 접근할 수 있는 함수

// 1. 데이터 은닉 - 외부에서 데이터에 직접 접근할 수 없음
// 2. 상태 유지 - 함수 호출 간 변수를 계속 기억함

function outer() {
	let count = 0;
	function inner() {
		return ++count;
	}
	return inner;
}
const counter1 = outer();

const counter2 = outer();

console.log(counter1());
console.log(counter1()); // 2

console.log(counter2());
console.log(counter2());
console.log(counter2()); // 3

// 가비지 컬렉션 수행이 안되고 메모리에 계속 잔존하게 되어 메모리 누수현상이 발생함
// 그래서 끝마침이 필요함

counter1 = null; // 연결관계 끊어버리기
counter2 = null;

// 이후 가비지컬렉션 수행.
// 클로저패턴엔 무조건 null로 끝내기
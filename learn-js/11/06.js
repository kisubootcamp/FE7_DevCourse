const person = {
	name: "kim",
};

// value
// writable -> false는 수정 불가능한 상태. true는 가능.
// enumerable -> 기본값이 false. 열거 가능 속성에 안보임. true로 설정시 보이게됨
// configurable -> 속성의 삭제 불가
Object.defineProperty(person, "age", {
	value: 20,
	enumerable: true,
	writable: true,
	configurable: false,
});

person.age = 50;
delete person.age;

console.log(person);
console.log(person.age);

// 실무에서 이렇게 정의하는 경우는 거~의 없음
Object.defineProperties(person, {
	// 여러개를 정의할때는 defineProperties
	job: {
		value: "developer",
	},
	salary: {
		value: 5000,
	},
});

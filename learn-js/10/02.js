/* 

게터(getter)
getter = get + -er   -> "얻는 사람" 또는 "얻는 기능"
세터(setter)
setter = set + -er   -> "설정하는 사람" 또는 "설정하는 기능" 


*/

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.info = `${this.name}, ${this.age}`;
}

const p1 = new Person("park", 29);
console.log(p1.info); // park, 29

// 이렇게 작성했을 때 문제점?
p1.name = "kim";
console.log(p1.info); // park, 29
// 나중에 name을 다시 넣어도 info 속성에는 당시의 name 값이 들어간 상태로 생성됨

function PersonName(lastName, firstName) {
	this.lastName = lastName;
	this.firstName = firstName;
	// this.fullName = function () {
	// 	return `${this.firstName}, ${this.lastName}`;
	// };
}
// 함수형태로 만들어야 값이 실시간으로 잘 반영이 됨

// const p2 = new PersonName("park", "sanga");
// console.log(p2.fullName()); // sanga, park
// p2.lastName = "kim";
// console.log(p2.fullName()); // sanga, kim

Object.defineProperty(PersonName.prototype, "fullName", {
	get: function () {
		return `${this.firstName} ${this.lastName}`;
	}, // 매개변수 없게 작성
	set: function (value) {
		const [lastName, firstName] = value.split(" ");
		this.firstName = firstName;
		this.lastName = lastName;
	},
});

const p3 = new PersonName("kim", "kisu");
// p3.lastName = "park";
// p3.firstName = "changsu";
p3.fullName = "park changsu";

console.log(p3.lastName); // park
console.log(p3.firstName); // changsu

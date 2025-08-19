class Person {
	constructor(lastName, firstName) {
		this.lastName = lastName;
		this.firstName = firstName;
	}
	// 게터 = 함수?  x
	get fullName() {
		return `${this.lastName} ${this.firstName}`;
	}
	set fullName(value) {
		[this.lastName, this.firstName] = value.split(" ");
		// this.fullName = value // 같은 이름으로 정의하면 maximun 어쩌구 뜸
	}
	get reverseName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

const p1 = new Person("park", "sanga");
console.log(p1.fullName);
p1.fullName = "park younghee";
console.log(p1.fullName);
console.log(p1.reverseName);

// 객체에서도 getter와 setter가 사용이 가능하다

const person = {
	firstName: "sanga",
	lastName: "park",
	get fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
	set fullName(value) {
		[this.firstName, this.lastName] = value.split(" ");
	},
};

person.fullName = "ehyeon jo";
console.log(person.fullName);

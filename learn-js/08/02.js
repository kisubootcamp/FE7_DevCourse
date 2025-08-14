const animal = {
	name: "곰",
	type: "고양이",
	age: 8,
	gender: "male",
	info: function () {
		return `${this.age}, ${this.animal}`;
	},
};
console.log(animal);
function MakeAnimalObj(name, type, age, gender) {
	this.name = name;
	this.type = type;
	this.age = age;
	this.gender = gender;
	this.info = function () {
		return `${this.age}, ${this.animal}`;
	};
}

// 생성자 함수로??
const animal1 = new MakeAnimalObj("팡이", "고양이", 5, "female");

console.log(animal1);

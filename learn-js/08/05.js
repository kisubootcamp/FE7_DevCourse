function Animal(name) {
	this.name = name;
}
Animal.prototype.speak = function () {
	return `${this.name} make a sound`;
};

const an = new Animal("cat");
console.log(an.name);
console.log(an.speak());

function Dog(name, age) {
	this.name = name;
	this.age = age;
}

// 새로운 객체를 만들건데, 그 객체의 프로토타입을 Animal.prototype으로 하겠따
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
// 이렇게 재할당을 해버려

Dog.prototype.bark = function () {
	return `${this.name} barks!`;
};

const dg = new Dog("puppy", 20);

console.log(dg.name);
console.log(dg.age);
console.log(dg.speak()); // dog에는 speak 메서드가 없어도 앞에서 프로토타입 생성해서 잘 출력이 됨
// 간접적인 상속을 구현한거다
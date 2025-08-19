class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		return `Hello, ${this.name}`;
	}
}

const p1 = new Person("kim", 20);
console.log(p1.greet());
// console.log(p1.coding()); // 부모 클래스에서 상속받은 클래스의 메서드 호출은 안됨

// 상속 구현 - extends
class Developer extends Person {
	constructor(name, age, skill) {
		super(name, age); // 부모의 생성자 호출
		this.skill = skill;
	}
	coding() {
		return `Coding in ${this.skill}`;
	}
}

const dev1 = new Developer("kim", 20, "JS");
console.log(dev1.greet());
console.log(dev1.coding());

class Animal {
	constructor(name) {
		this.name = name;
	}
	speak() {
		return `${this.name}이 소리를 냅니다`;
	}
}

class Dog extends Animal {
	constructor(name) {
		super(name);
	}
	bark() {
		return `${this.name}이 짖습니다`;
	}
  // 오버라이딩(overriding) 부모 클래스의 메서드를 자식 클래스에서 재정의
  speak() {
    return `${this.name}이 소리를 아주 크게 냅니다`;
  }
}

const dg1 = new Dog("곰이");
console.log(dg1.speak());
console.log(dg1.bark());

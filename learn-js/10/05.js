class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	// static method  정적메서드. 프로토타입 속성으로 들어가는게 아니라 constructor에 들어가므로 접근이 불가능함
	// 프로토타입 체이닝은 프로토타입끼리만 통함. 그래서 스태틱 메서드는 안뜸
	static greet() {
		return `hello ${this.age}`;
	}

  // 메서드 뿐만아니라 정적 속성도 가능. static property
  static APP_NAME = "Person Android"
}

const p1 = new Person("kim", 20);
// console.log(p1.greet()) // p1.greet is not a function
// 그래서 어케 접근하냐? 클래스를 직접 적어야함
console.log(Person.greet()); // this가 가리키는 곳에 age가 없어 undefined
console.log(Person.APP_NAME);

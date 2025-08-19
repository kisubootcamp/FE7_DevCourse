// 문제 1: Account 클래스를 만드세요.
// 프라이빗 필드 #balance (초기값 0).
// deposit(amount), withdraw(amount)는 0보다 큰 숫자만 허용, 부족하면 Error.
// balance는 getter로만 제공.
// 기본 제공 코드

class Account {
	#balance;
	constructor() {
		this.#balance = 0;
	}
	deposit(amount) {
		if (amount < 0) throw new Error`Invaild Amount`();
		this.#balance += amount;
		return this.#balance;
	}
	withdraw(amount) {
		if (amount < 0) throw new Error`Invaild Amount`();
		this.#balance -= amount;
		return this.#balance;
	}
	get balance() {
		return `${this.#balance}`;
	}
}

// 테스트
const acc = new Account();
acc.deposit(100);
acc.withdraw(30);
console.log(acc.balance); // 70

// 문제 2: Vehicle(name)과 이를 상속하는 Car(name, brand).
// Vehicle의 info()는 "차량: name".
// Car는 이를 오버라이드해 "브랜드 brand, 차량: name" 반환.
// 기본 제공 코드

class Vehicle {
	constructor(name) {
		this.name = name;
	}
	info() {
		return `차량: ${this.name}`;
	}
}

class Car extends Vehicle {
	constructor(name, brand) {
		super(name);
		this.brand = brand;
	}
	info() {
		return `브랜드 ${this.brand}, 차량: ${this.name}`;
	}
}

// 테스트
const v = new Vehicle("스쿠터");
const c = new Car("아반떼", "Hyundai");
console.log(v.info()); // 차량: 스쿠터
console.log(c.info()); // 브랜드 Hyundai, 차량: 아반떼

// 문제 3: Temperature 클래스에 정적 메서드 c2f(c), f2c(f)를 구현하세요.
// 화씨(F)↔섭씨(C) 변환 공식 사용(소수점은 반올림 없이 그대로).
// C → F: C * 9/5 + 32
// F → C: (F - 32) * 5/9
// 기본 제공 코드

class Temperature {
	static c2f(c) {
		return (c * 9) / 5 + 32;
	}
	static f2c(f) {
		return ((f - 32) * 5) / 9;
	}
}

// 테스트
console.log(Temperature.c2f(0)); // 32
console.log(Temperature.f2c(212)); // 100

// 문제 4: User(first, last)에서
// fullName getter → "first last"
// fullName setter → "성 이름" 형태의 문자열을 받아 각각 분리하여 저장.
// 기본 제공 코드

class User {
	constructor(first, last) {
		this.first = first;
		this.last = last;
	}
	get fullName() {
		return `${this.first} ${this.last}`;
	}
	set fullName(full) {
		[this.first, this.last] = full.split(" ");
		return;
	}
}
// 테스트
const u = new User("길동", "홍");
console.log(u.fullName); // 길동 홍
u.fullName = "민수 김";
console.log(u.first, u.last); // 민수 김

// 문제 5: QueryBuilder는 내부에 문자열을 쌓습니다.
// select(cols), from(table), where(cond)는 모두 this를 반환하여 체이닝.
// build()는 최종 문자열을 반환.
// 기본 제공 코드

class QueryBuilder {
	constructor() {
		this.result = "";
	}
	select(char) {
		this.result += `SELECT ${char} `;
		return this;
	}
	from(char) {
		this.result += `FROM ${char} `;
		return this;
	}
	where(char) {
		this.result += `WHERE ${char} `;
		return this;
	}
	build() {
		return this.result;
	}
}

// 테스트
const q = new QueryBuilder()
	.select("name, age")
	.from("users")
	.where("age >= 18")
	.build();
console.log(q); // SELECT name, age FROM users WHERE age >= 18

// 문제 6: Person(name)을 만들고, 선언 후 프로토타입에 greet()를 추가하세요.
// 기본 제공 코드

class Person {
	constructor(name) {
		this.name = name;
	}
}
Person.prototype.greet = function () {
	return `${this.name}님, 안녕하세요!`;
};
// 테스트
const p = new Person("이순신");
console.log(p.greet()); // 이순신님, 안녕하세요!

// 문제 7: Book(title) 생성 시마다 카운트를 증가시키고,
// Book.getCount()로 현재 수를 반환.
// 기본 제공 코드

class Book {
	static cnt = 0;
	constructor(title) {
		this.title = title;
		Book.cnt++;
	}
	static getCount() {
		return Book.cnt;
	}
}
// 테스트
const b1 = new Book("1984");
const b2 = new Book("나니아");
console.log(Book.getCount()); // 2

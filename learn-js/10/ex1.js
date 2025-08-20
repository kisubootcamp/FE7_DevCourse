// 연습문제

// 1
class Car {
  constructor(make, model, year) {
    // 초기화 코드
    this.make = make;
    this.model = model;
    this.year = year;
  }

  info() {
    // 자동차 정보 출력 코드
    return `${this.year} ${this.make} ${this.model}`;
  }
}

// 테스트 케이스
const car1 = new Car("Toyota", "Camry", 2020);
console.log(car1.info()); // 2020 Toyota Camry

//

// 2
class Animal {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    return `${this.name}입니다.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // 부모 클래스의 생성자 호출
  }

  bark() {
    return "왈왈";
  }
}

// 테스트 케이스
const dog = new Dog("바둑이");
console.log(dog.introduce()); // 바둑이입니다.
console.log(dog.bark()); // 왈왈

//

// 3
class MathUtil {
  static min(a, b) {
    // 두 수 중 작은 값을 반환하는 정적 메서드
    return a < b ? a : b;
  }
}

// 테스트 케이스
console.log(MathUtil.min(10, 20));

//

// 4
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

// 테스트 케이스
const rect = new Rectangle(5, 10);
console.log(rect.area); // 50

//

// 5
class Counter {
  static count = 0;

  static increment() {
    Counter.count++;
  }

  static getValue() {
    return Counter.count;
  }
}

// 테스트 케이스
Counter.increment();
console.log(Counter.getValue());

//

// 6
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `${this.name} 안녕!`;
  }
}

// 테스트 케이스
const person = new Person("이순신");
console.log(person.greet()); // 이순신 안녕!

//

// 7
class Shape {
  area() {
    //
  }
}

class Circle extends Shape {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return this.radius * this.radius * 3.14;
  }
}

class Rect extends Shape {
  constructor(width, height = width) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// 테스트 케이스
const circle = new Circle(5);
console.log(circle.area()); // 5 * 5 * 3.14

const rect2 = new Rect(5);
console.log(rect2.area()); // 25 (5*5)

//

// 8
class Builder {
  constructor() {
    this.value = "";
  }

  append(str) {
    this.value += str;
    return this;
  }

  getValue() {
    return this.value;
  }
}

// 테스트 케이스
const builder = new Builder();
const result = builder.append("Hello, ").append("World!").getValue();
console.log(result); // Hello, World!

//

// 9
class Book {
  constructor(title) {
    this.title = title;
    Book.incrementCount();
  }

  static count = 0;

  static incrementCount() {
    this.count++;
  }

  static getCount() {
    return Book.count;
  }
}

// 테스트 케이스
const book1 = new Book("1984");
const book2 = new Book("하이퍼리얼리티");
console.log(Book.getCount()); // 2

//

// 10
class User {
  constructor(name, age = 18) {
    this.name = name;
    this.age = age;
  }

  info() {
    return `${this.name}의 나이는 ${this.age}세입니다.`;
  }
}

// 테스트 케이스
const user = new User("홍길동");
console.log(user.info()); // 홍길동의 나이는 18세입니다.

//

// 연습문제 +(++)

// 1
class Account {
  #balance = 0; // private 필드로 선언

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("입금액은 0보다 커야 합니다.");
    } else {
      this.#balance += amount;
    }
  }

  withdraw(amonut) {
    if (amonut <= 0) {
      throw new Error("출금액은 0보다 커야 합니다.");
    } else if (amonut > this.#balance) {
      throw new Error("잔액이 부족합니다.");
    } else {
      this.#balance -= amonut;
    }
  }

  get balance() {
    return this.#balance;
  }
}

// 테스트
const acc = new Account();
acc.deposit(100);
acc.withdraw(30);
console.log(acc.balance); // 70

//

// 2
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

//

// 3
class Temperature {
  static c2f(cel) {
    return (cel * 9) / 5 + 32;
  }

  static f2c(fah) {
    return ((fah - 32) * 5) / 9;
  }
}

// 테스트
console.log(Temperature.c2f(0)); // 32
console.log(Temperature.f2c(212)); // 100

//

// 4
class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(name) {
    const [first, last] = name.split(" ");
    this.first = first;
    this.last = last;
  }
}

// 테스트
const u = new User("길동", "홍");
console.log(u.fullName); // 길동 홍
u.fullName = "민수 김";
console.log(u.first, u.last); // 민수 김

//

// 5
class QueryBuilder {
  constructor() {
    this.query = "";
  }

  select(cols) {
    this.query += `SELECT ${cols} `;
    return this;
  }

  from(table) {
    this.query += `FROM ${table} `;
    return this;
  }

  where(cond) {
    this.query += `WHERE ${cond} `;
    return this;
  }

  build() {
    return this.query.trim();
  }
}

// 테스트
const q = new QueryBuilder()
  .select("name, age")
  .from("users")
  .where("age >= 18")
  .build();
console.log(q); // SELECT name, age FROM users WHERE age >= 18

//

// 6
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

//

// 7
class Book {
  constructor(title) {
    this.title = title;
    Book.incrementCount();
  }

  static count = 0;

  static incrementCount() {
    this.count++;
  }

  static getCount() {
    return Book.count;
  }
}

// 테스트
const b1 = new Book("1984");
const b2 = new Book("나니아");
console.log(Book.getCount()); // 2

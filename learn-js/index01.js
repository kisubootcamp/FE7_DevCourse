/*
Car 클래스를 정의하고, make, model, year를 인스턴스 변수로 갖도록 하세요. info 메서드를 추가하여 자동차 정보를 출력하도록 하세요.
*/
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  info() {
    return `${this.year} ${this.make} ${this.model}`;
  }
}

/*
Animal 클래스를 만들고, Dog 클래스를 Animal로부터 상속받게 하세요. Dog 클래스에 bark 메서드를 추가하세요.
*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    return `${this.name} barks.`;
  }
}

/*
MathUtil 클래스를 만들어, 두 수의 최소값을 반환하는 정적 메서드 min을 작성하세요.
*/
class MathUtil {
  static min(a, b) {
    return a < b ? a : b;
  }
}

/*
Rectangle 클래스를 정의하고, width와 height를 속성으로 갖도록 하세요. area는 접근자로 구현하세요.
*/
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }
}

/*
Counter 클래스를 만들어, 카운터를 증가시키는 클래스 메서드 increment와 현재 값을 반환하는 getValue 메서드를 추가하세요. 카운터의 초깃값은 0입니다.
*/
class Counter {
  static count = 0;

  static increment() {
    this.count++;
  }

  static getValue() {
    return this.count;
  }
}

/*
Person 클래스를 정의하고, 프로토타입에 greet 메서드를 추가하세요.
*/
class Person {
  constructor(name) {
    this.name = name;
  }
}
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}.`;
};

/*
Shape 클래스를 만들고, Circle와 Rectangle 클래스를 상속받도록 하세요. 각각의 area 메서드를 오버라이드(오버라이딩)하세요.
*/
class Shape {
  area() {
    throw new Error("이 메서드는 오버라이드 되어야 합니다.");
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}
class RectangleShape extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

/*
Builder 클래스를 만들어, 여러 메서드를 체이닝할 수 있도록 하세요.
*/
class Builder {
  constructor() {
    this.value = "";
  }

  addText(text) {
    this.value += text;
    return this; // 체이닝
  }

  addNumber(num) {
    this.value += num.toString();
    return this; // 체이닝
  }

  build() {
    return this.value; // 최종 결과
  }
}

/*
Book 클래스를 정의하고, 생성될 때마다 인스턴스 수를 카운트하도록 하세요.
*/
class Book {
  static instanceCount = 0;

  constructor(title, author) {
    this.title = title;
    this.author = author;
    Book.instanceCount++;
  }

  static getInstanceCount() {
    return Book.instanceCount;
  }
}

/*
User 클래스를 정의하고, age의 기본값을 18로 설정하도록 하세요.
*/
class User {
  constructor(name, age = 18) {
    this.name = name;
    this.age = age;
  }

  info() {
    return `${this.name} is ${this.age} years old.`;
  }
}

/*
### 1) 프라이빗 필드 + 입금/출금 검증

**문제 1:** `Account` 클래스를 만드세요.

- 프라이빗 필드 `#balance` (초기값 0).
- `deposit(amount)`, `withdraw(amount)`는 0보다 큰 숫자만 허용, 부족하면 Error.
- `balance`는 **getter**로만 제공.

*/
class Account {
  #balance = 0;

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("입금은 0원 이상이어야 합니다.");
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("출금은 0원 이상이여야 합니다.");
    }
    if (amount > this.#balance) {
      throw new Error("잔액 부족.");
    }
    this.#balance -= amount;
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

/*
### 2) 상속 + 메서드 오버라이딩

**문제 2:** `Vehicle`(name)과 이를 상속하는 `Car`(name, brand).

- `Vehicle`의 `info()`는 `"차량: name"`.
- `Car`는 이를 오버라이드해 `"브랜드 brand, 차량: name"` 반환.

*/
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

/*
`Temperature` 클래스에 정적 메서드 `c2f(c)`, `f2c(f)`를 구현하세요.

- 화씨(F)↔섭씨(C) 변환 공식 사용(소수점은 반올림 없이 그대로).
- C → F: `C * 9/5 + 32`
- F → C: `(F - 32) * 5/9`

*/
class Temperature {
  static c2f(c) {
    return Math.round((c * 9) / 5 + 32);
  }

  static f2c(f) {
    return Math.round(((f - 32) * 5) / 9);
  }
}

// 테스트
console.log(Temperature.c2f(0)); // 32
console.log(Temperature.f2c(212)); // 100

/*
**문제 4:** `User`(first, last)에서

- `fullName` **getter** → `"first last"`
- `fullName` **setter** → `"성 이름"` 형태의 문자열을 받아 각각 분리하여 저장.

*/
class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(name) {
    const parts = name.split(" ");
    if (parts.length === 2) {
      this.first = parts[0];
      this.last = parts[1];
    } else {
      throw new Error("전체 이름은 'First Last' 형식이여야 합니다.");
    }
  }
}

// 테스트
const u = new User("길동", "홍");
console.log(u.fullName); // 길동 홍
u.fullName = "민수 김";
console.log(u.first, u.last); // 민수 김

/*
**문제 5:** `QueryBuilder`는 내부에 문자열을 쌓습니다.

- `select(cols)`, `from(table)`, `where(cond)`는 모두 `this`를 반환하여 체이닝.
- `build()`는 최종 문자열을 반환.
*/
class QueryBuilder {
  constructor() {
    this.query = "";
  }

  select(cols) {
    this.query += `SELECT ${cols} `;
    return this; // 체이닝
  }

  from(table) {
    this.query += `FROM ${table} `;
    return this; // 체이닝
  }

  where(cond) {
    this.query += `WHERE ${cond} `;
    return this; // 체이닝
  }

  build() {
    return this.query.trim(); // 최종 문자열 반환
  }
}
// 테스트
const q = new QueryBuilder()
  .select("name, age")
  .from("users")
  .where("age >= 18")
  .build();
console.log(q); // SELECT name, age FROM users WHERE age >= 18

/*
문제 6: Person(name)을 만들고, 선언 후 프로토타입에 greet()를 추가하세요.
*/
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

/*
**문제 7:** `Book`(title) 생성 시마다 카운트를 증가시키고,

- `Book.getCount()`로 현재 수를 반환.
*/
class Book {
  static count = 0;

  constructor(title) {
    this.title = title;
    Book.count++;
  }

  static getCount() {
    return Book.count;
  }
}

// 테스트
const b1 = new Book("1984");
const b2 = new Book("나니아");
console.log(Book.getCount()); // 2

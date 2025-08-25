class Account {
  #balance = 0;
  deposit(amount) {
    if (typeof amount !== "number" || amount <= 0) throw new Error("invalid");
    this.#balance += amount;
  }
  withdraw(amount) {
    if (typeof amount !== "number" || amount <= 0) throw new Error("invalid");
    this.#balance -= amount;
  }
  get balance() {
    return this.#balance;
  }
}

const acc = new Account();
acc.deposit(100);
acc.withdraw(30);
acc.balance = 10;
console.log(acc.balance);

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
    return `브랜드: :${this.brand}, 차량: ${this.name}`;
  }
}
const v = new Vehicle("스쿠터");
const c = new Car("아반떼", "Hyundai");

console.log(v.info());
console.log(c.info());

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

class User {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }
  set fullName(value) {
    [this.first, this.last] = value.split(" ");
  }
}

// 테스트
const u = new User("길동", "홍");
console.log(u.fullName); // 길동 홍
u.fullName = "민수 김";
console.log(u.first, u.last); // 민수 김

class QueryBuilder {
  constructor() {
    this.parts = {
      select: "",
      from: "",
      where: "",
    };
  }
  select(cols) {
    this.parts.select = cols;
    return this;
  }

  from(fr) {
    this.parts.from = fr;
    return this;
  }

  where(wh) {
    this.parts.where = wh;
    return this;
  }

  build() {
    return `SELECT ${this.parts.select} FROM ${this.parts.from} WHERE ${this.parts.where}`;
  }
}

// 테스트
const q = new QueryBuilder()
  .select("name, age")
  .from("users")
  .where("age >= 18")
  .build();
console.log(q); // SELECT name, age FROM users WHERE age >= 18

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `${this.name}님, 안녕하세요!`;
  }
}

// 테스트
const p = new Person("이순신");
console.log(p.greet()); // 이순신님, 안녕하세요!

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

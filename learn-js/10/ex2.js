// class 연습문제 +(++)

//1

class Account {
  #balance = 0;

  deposit(amount) {
    if (typeof amount !== "number" || amount < 0)
      throw new Error("invalid amount");
    this.#balance += amount;
  }

  withdraw(amount) {
    if (typeof amount !== "number" || amount < 0)
      throw new Error("invalid amount");
    this.#balance -= amount;
  }

  get balance() {
    return this.#balance;
  }
}

const acc = new Account();
acc.deposit(100);
acc.withdraw(30);
console.log(acc.balance); // 70

//2
class Vehicle {
  constructor(name) {
    this.name = name;
  }
  info() {
    return `차량 ${this.name}`;
  }
}

class Car extends Vehicle {
  constructor(name, brand) {
    super(name);
    this.brand = brand;
  }

  info() {
    return `브랜드 ${this.name}, 차량 : ${this.brand}`;
  }
}

const v = new Vehicle("스쿠터");
const c = new Car("아반떼", "Hyundai");
console.log(v.info()); // 차량: 스쿠터
console.log(c.info()); // 브랜드 Hyundai, 차량: 아반떼

//3

class Temperature {
  static c2f(temp) {
    return temp * (9 / 5) + 32;
  }

  static f2c(temp) {
    return (temp - 32) * (5 / 9);
  }
}

console.log(Temperature.c2f(0)); // 32
console.log(Temperature.f2c(212)); // 100

//4
class User {
  constructor(last, first) {
    this.last = last;
    this.first = first;
  }
  get fullName() {
    return `${this.last} ${this.first}`;
  }
  set fullName(fullName) {
    [this.first, this.last] = fullName.split(" ");
  }
}

const u = new User("길동", "홍");
console.log(u.fullName); // 길동 홍
u.fullName = "민수 김";
console.log(u.first, u.last); // 민수 김

//5
// 이 문제는 str를 객체로 해서 하는 방법도 생각
class QueryBuilder {
  constructor() {
    this.str = "SELECT ";
    return this;
  }
  select(name) {
    //this.str.select = name; 이런 식으로 객체의 키 값과 밸류 값으로 하는 것도 생각
    this.name = name;
    this.str += name + " FROM ";
    return this;
  }
  from(users) {
    this.users = users;
    this.str += users + " WHERE ";
    return this;
  }
  where(a) {
    this.a = a;
    this.str += a;
    return this;
  }
  build() {
    return this.str;
  }
}

const q = new QueryBuilder()
  .select("name, age")
  .from("users")
  .where("age >= 18")
  .build();
console.log(q); // SELECT name, age FROM users WHERE age >= 18

//6

class Person {
  constructor(name) {
    this.name = name;
  }

  static greet() {
    return `${this.name}님, 안녕하세요!`;
  }
}
const p = new Person("이순신");
console.log(p.greet()); // 이순신님, 안녕하세요!

//7
class Book {
  static COUNT = 0;
  constructor(title) {
    this.title = title;
    Book.COUNT++;
  }
  static getCount() {
    return Book.COUNT;
  }
}

const b1 = new Book("1984");
const b2 = new Book("나니아");
console.log(Book.getCount()); // 2

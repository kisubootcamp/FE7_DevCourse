class Car {
  constructor(make, model, year) {
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

// 2.
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
    super(name);
  }
  bark() {
    return `왈왈`;
  }
}
// 테스트 케이스
const dog = new Dog("바둑이");
console.log(dog.introduce()); // 바둑이입니다.
console.log(dog.bark()); // 왈왈

// 3.
class MathUtil {
  static min(a, b) {
    return a < b ? a : b;
  }
}
// 테스트 케이스
console.log(MathUtil.min(10, 20));

// 4.
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

// 5.
class Counter {
  static count = 0;
  static increment() {
    this.count++;
  }
  static getValue() {
    return this.count;
  }
}
// 테스트 케이스
Counter.increment();
console.log(Counter.getValue());

// 6.
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

// 7.
class Shape {
  area() {
    // throw new Error("메서드를 구현해야 합니다.");
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return 3.14 * this.radius * this.radius;
  }
}

class Rect extends Shape {
  constructor(value) {
    super();
    this.width = value;
    this.height = value;
  }
  area() {
    return this.width * this.height;
  }
}

// 테스트 케이스
const circle = new Circle(5);
console.log(circle.area()); // 5 * 5 * 3.14

const rect1 = new Rect(5);
console.log(rect1.area()); // 25 (5*5)

// 8.
class Builder {
  constructor() {
    this.value = "";
  }
  append(text) {
    this.value += text;
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

// 9.
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
// 테스트 케이스
const book1 = new Book("1984");
const book2 = new Book("하이퍼리얼리티");
console.log(Book.getCount()); // 2

// 10.
class User {
  constructor(name, age = 18) {
    this.name = name;
    this.age = age;
  }
  info() {
    return `${this.name}의 나이는 ${this.age}입니다.`;
  }
}
// 테스트 케이스
const user = new User("홍길동");
console.log(user.info()); // 홍길동의 나이는 18세입니다.

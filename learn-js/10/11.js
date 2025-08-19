// 1
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

// 2
class Animal {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `${this.name}입니다`;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    return "왈왈";
  }
}

const dog = new Dog("바둑이");
console.log(dog.introduce()); // 바둑이입니다.
console.log(dog.bark()); // 왈왈

// 3
class MathUtil {
  static min(a, b) {
    return a < b ? a : b;
  }
}
console.log(MathUtil.min(10, 20));

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
const rect = new Rectangle(5, 10);
console.log(rect.area); // 50

// 5
class Counter {
  static count = 0;
  static increment() {
    this.count++;
  }
  static getValue() {
    return this.count;
  }
}
Counter.increment();
Counter.increment();
console.log(Counter.getValue());

// 6
class Person {
  constructor(name) {
    this.name = name;
  }
  // 구식 방법
  // shorthand method
  greet() {
    return `${this.name} 안녕!`;
  }
}

const person = new Person("이순신");
console.log(person.greet()); // 이순신 안녕!

// 7
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
    return 3.15 * this.radius * this.radius;
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

const circle = new Circle(5);
console.log(circle.area()); // 5 * 5 * 3.14

const rects = new Rect(5);
console.log(rects.area()); // 25 (5*5)

// 8
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
const builder = new Builder();
const result = builder.append("Hello, ").append("World!").getValue();
console.log(result); // Hello, World!

// 9
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
const book1 = new Book("1984");
const book2 = new Book("하이퍼리얼리티");
console.log(Book.getCount()); // 2

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
const user = new User("홍길동");
console.log(user.info()); // 홍길동의 나이는 18세입니다.

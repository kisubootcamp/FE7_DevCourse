// Q1
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
// 테스트 케이스
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2019);
console.log(car1.info()); // 2020 Toyota Camry
console.log(car2.info()); // 2019 Honda Civic

// Q2
class Animal {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `${this.name} 입니다.`;
  }
}
class Dog extends Animal {
  bark() {
    return `왈왈`;
  }
}
// 테스트 케이스
const dog = new Dog("바둑이");
console.log(dog.introduce()); // 바둑이입니다.
console.log(dog.bark()); // 왈왈

// Q3
class MathUtil {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  static min(a, b) {
    return a < b ? a : b;
  }
}
// 테스트 케이스
console.log(MathUtil.min(10, 20));

// Q4
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

// Q5
class Counter {
  static count = 0; // 클래스 변수
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

// Q6
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

// Q7
// 부모 클래스 Shape
class Shape {
  area() {
    throw new Error("area() must be implemented");
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return this.radius * this.radius * 3.14;
  }
}
class Rect extends Shape {
  constructor(num) {
    super();
    this.width = num;
    this.height = num;
  }
  area() {
    return this.width * this.height;
  }
}
// 테스트 케이스
const circle = new Circle(5);
console.log(circle.area()); // 5 * 5 * 3.14

const rect = new Rect(5);
console.log(rect.area()); // 25 (5*5)

// Q8
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

// Q9
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

// Q10
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

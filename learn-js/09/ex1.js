// 연습 문제
// 원리를 생각할 것

// 1.
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
// return X :: 함수의 목적이 출력이므로 값은 반환할 필요가 없기 때문

const john = new Person("John");
john.greet();

// 2.
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  console.log(`The car has started.`);
};

const myCar = new Car("Toyota");
myCar.start();

// 3.
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const rect = new Rectangle(5, 10);
console.log(rect.area());

// 4.
function Animal() {}

Animal.prototype.speak = function () {
  console.log("Animal makes a sound");
};

const animal = new Animal();
animal.speak();

// 5. *
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  console.log("Animal makes a sound");
};

// 여기에 Dog의 speak 메서드를 수정하세요.

// 오버라이드 :: 이미 존재하는 메서드를 재정의한다 (재할당)
Dog.prototype.speak = function () {
  console.log("Woof!");
};

const dog = new Dog("Buddy");
dog.speak();

// 6.
function Student(name) {
  this.name = name;
}

Student.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name} and I'm a student.`);
};

const student = new Student("Alice");
student.introduce();

// 7.
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getSummary = function () {
  return `Title: ${this.title}, Author: ${this.author}`;
};
// 문자열 출력이 아닌 저렇게 생긴 문장 자체가 필요한거라 (다음에도 저런 형식으로 사용하고 싶으므로) 리턴 사용한거

const book = new Book("1984", "George Orwell");
console.log(book.getSummary());

// 8.
function Shape() {}

Shape.prototype.getType = function () {
  return console.log("I am a shape.");
};

const shape = new Shape();
shape.getType();

// 9.
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getCircumference = function () {
  return 2 * 3.14 * this.radius;
};

const circle = new Circle(5);
console.log(circle.getCircumference());

// 10.
function Employee(name, position) {
  this.name = name;
  this.position = position;
}

Employee.prototype.getDetails = function () {
  return `Name: ${this.name}, Position: ${this.position}`;
};

const employee = new Employee("Bob", "Developer");
console.log(employee.getDetails());

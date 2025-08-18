// 프로토타입 연습문제

//1
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet();

//2
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  console.log(`the car has started`);
};

const myCar = new Car("Toyota");
myCar.start();

//3
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const rect = new Rectangle(5, 10);
console.log(rect.area());

//4
function Animal() {}

Animal.prototype.speak = function () {
  console.log("Animal makes a sound");
};

const animal = new Animal();
animal.speak();

//5
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  console.log("Animal makes a sound");
};

Dog.prototype.speak = function () {
  console.log("Woof");
};

const dog = new Dog("Buddy");
dog.speak();

//6
function Student(name) {
  this.name = name;
}

Student.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name} and I'm a student.`);
};

const student = new Student("Alice");
student.introduce();

//7
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getSummary = function () {
  return `Title: ${this.title}, Author: ${this.author}`;
};

const book = new Book("1984", "George Orwell");
console.log(book.getSummary());

//8
function Shape() {}

Shape.prototype.getType = function () {
  console.log("I am a shape");
};

const shape = new Shape();
shape.getType();

//9
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getCircumference = function () {
  return this.radius * 2 * 3.14;
};

const circle = new Circle(5);
console.log(circle.getCircumference());

//10
function Employee(name, position) {
  this.name = name;
  this.position = position;
}

Employee.prototype.getDetails = function () {
  return `Name: ${this.name}, Position: ${this.position}`;
};

const employee = new Employee("Bob", "Developer");
console.log(employee.getDetails());

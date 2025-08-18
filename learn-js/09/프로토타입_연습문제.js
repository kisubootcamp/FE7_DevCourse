// Q1
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function greet() {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet();

// Q2
function Car(brand) {
  this.brand = brand;
}
Car.prototype.start = function start() {
  console.log("The car has started.");
};

const myCar = new Car("Toyota");
myCar.start();

// Q3
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function area() {
  return this.width * this.height;
};

const rect = new Rectangle(5, 10);
console.log(rect.area());

// Q4
function Animal() {}

// 여기에 speak 메서드를 추가하세요.
Animal.prototype.speak = function speak() {
  console.log("Animal makes a sound");
};
const animal = new Animal();
animal.speak();

// Q5
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  console.log("Animal makes a sound");
};

// 여기에 Dog의 speak 메서드를 수정하세요.
Dog.prototype.speak = function () {
  console.log("Woof!");
};

const dog = new Dog("Buddy");
dog.speak();

// Q6
function Student(name) {
  this.name = name;
}

// 여기에 introduce 메서드를 추가하세요.
Student.prototype.introduce = function introduce() {
  console.log(`Hi, I'm ${this.name} and I'm a student.`);
};

const student = new Student("Alice");
student.introduce();

// Q7
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getSummary = function getSummary() {
  return `Title: ${this.title}, Author: ${this.author}`;
};
const book = new Book("1984", "George Orwell");
console.log(book.getSummary());

// Q8
function Shape() {}

// 여기에 getType 메서드를 추가하세요.
Shape.prototype.getType = function getType() {
  console.log("I am a shape");
};

const shape = new Shape();
shape.getType();

// Q9
function Circle(radius) {
  this.radius = radius;
}

// 여기에 getCircumference 메서드를 추가하세요.
Circle.prototype.getCircumference = function getCircumference() {
  return this.radius * 2 * 3.14;
};

const circle = new Circle(5);
console.log(circle.getCircumference());

// Q10
function Employee(name, position) {
  this.name = name;
  this.position = position;
}

// 여기에 getDetails 메서드를 추가하세요.
Employee.prototype.getDetails = function getDetails() {
  return `Name: ${this.name}, Position: ${this.position}`;
};

const employee = new Employee("Bob", "Developer");
console.log(employee.getDetails());

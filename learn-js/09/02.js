//1
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `Hello, my name is ${this.name}`;
};

const john = new Person("John");
john.greet();

//2

function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  return ` ${this.brand} has started`;
};

const myCar = new Car("toyota");
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

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};
const animal = new Animal();
animal.speak;

//5
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  console.log("Animal makes a sound");
};

Dog.prototype.speak = function () {
  console.log("Woof!");
};

const dog = new Dog("Buddy");
dog.speak(); // Woof!

//6

function Student(name) {
  this.name = name;
}

Student.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name} and i'm a student `);
};

// 여기에 introduce 메서드를 추가하세요.

const student = new Student("Alice");
student.introduce();

//7

function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getSummary = function () {
  console.log(`Title: ${this.title}, Author: ${this.author}`);
};
// 여기에 getSummary 메서드를 추가하세요.

const book = new Book("1984", "George Orwell");
console.log(book.getSummary());

//8
function Shape() {}

Shape.prototype.getType = function () {
  console.log("I am a shape.");
};

const shape = new Shape();
shape.getType(); // I am a shape.

//9

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getCircumference = function () {
  return this.radius * 3.14;
};
// 여기에 getCircumference 메서드를 추가하세요.

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
// 여기에 getDetails 메서드를 추가하세요.

const employee = new Employee("Bob", "Developer");
console.log(employee.getDetails());

//프로토타입 연습문제+

//1

function Vehicle(speed) {
  this.speed = speed;
}

Vehicle.prototype.accelerate = function (moreSpeed) {
  return (this.speed += moreSpeed);
};

const car = new Vehicle(0);
car.accelerate(10);
console.log(car.speed);

//2
function Shape() {}

Shape.prototype.getArea = function () {
  throw new Error("getArea() must be implemented");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.getArea = function () {
  return this.radius * this.radius * 3.14;
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.getArea());
console.log(rectangle.getArea());

//3
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
};

const person = new Person("John", "Doe");
console.log(person.fullName()); // "John Doe"

//4

function BankAccount(initialBalance) {
  this.balance = initialBalance;
}

BankAccount.prototype.deposit = function (plus) {
  return (this.balance += plus);
};
BankAccount.prototype.withdraw = function (minus) {
  return (this.balance -= minus);
};

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120

//5
function Employee(baseSalary, bonus) {
  this.baseSalary = baseSalary;
  this.bonus = bonus;
}

Employee.prototype.getSalary = function () {
  return (this.baseSalary += this.bonus);
};

const employee = new Employee(3000, 500);
console.log(employee.getSalary()); // 3500

//6
function Library() {
  this.books = [];
}

Library.prototype.addBook = function (plus) {
  this.books.push(plus);
};
Library.prototype.listBooks = function () {
  return this.books;
};

const library = new Library();
library.addBook("1984");
library.addBook("Brave New World");
console.log(library.listBooks()); // ["1984", "Brave New World"]

//7
function Calculator() {}

Calculator.prototype.add = function (num1, num2) {
  return num1 + num2;
};
Calculator.prototype.subtract = function (num1, num2) {
  return num1 - num2;
};
Calculator.prototype.multiply = function (num1, num2) {
  return num1 * num2;
};
Calculator.prototype.divide = function (num1, num2) {
  if (num2 === 0) return "Cannot divide by zero";
  return num1 / num2;
};

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 0)); // "Cannot divide by zero"

//8
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.isAdult = function () {
  return this.age >= 18;
};

const john = new Person("John", 20);
console.log(john.isAdult()); // true
const alice = new Person("Alice", 16);
console.log(alice.isAdult()); // false

//9
function Stack() {
  this.items = [];
}

Stack.prototype.push = function (add) {
  this.items.push(add);
};
Stack.prototype.pop = function () {
  if (this.items.length === 0) return "Stack is empty";
  this.items.pop();
  return this.items.length + 1;
};

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // "Stack is empty"

//10

function Person(name) {
  this.name = name;
  this.friends = [];
}
Person.prototype.addFriend = function (name) {
  this.friends.push(name);
};
Person.prototype.listFriends = function () {
  return this.friends;
};

const johnn = new Person("Johnn");
johnn.addFriend("Alice");
johnn.addFriend("Bob");
console.log(johnn.listFriends()); // ["Alice", "Bob"]

// 1.
function Vehicle(speed) {
  this.speed = speed;
}

Vehicle.prototype.accelerate = function (num) {
  this.speed += num;
};

const car = new Vehicle(0);
car.accelerate(10);
console.log(car.speed); // 10

// 2.
function Shape() {}

Shape.prototype.getArea = function () {
  throw new Error("getArea() must be implemented");
};

function Circle(radius) {
  this.radius = radius;
}

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Circle.prototype.getArea = function () {
  return `Area is ${Math.PI * this.radius ** 2}`;
};

Rectangle.prototype.getArea = function () {
  return `Area is ${this.width * this.height}`;
};

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.getArea()); // 78.54
console.log(rectangle.getArea()); // 24

// 3.
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person = new Person("John", "Doe");
console.log(person.fullName()); // "John Doe"

// 4.
function BankAccount(initialBalance) {
  this.balance = initialBalance;
}

BankAccount.prototype.deposit = function (num) {
  this.balance += num;
};

BankAccount.prototype.withdraw = function (num) {
  this.balance -= num;
};

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120

// 5.
function Employee(baseSalary, bonus) {
  this.baseSalary = baseSalary;
  this.bonus = bonus;
}

Employee.prototype.getSalary = function () {
  return `${this.baseSalary + this.bonus}`;
};

const employee = new Employee(3000, 500);
console.log(employee.getSalary()); // 3500

// 6.
function Library() {
  this.books = [];
}

Library.prototype.addBook = function (book) {
  this.books.push(book);
};

Library.prototype.listBooks = function (book) {
  return this.books;
};

const library = new Library();
library.addBook("1984");
library.addBook("Brave New World");
console.log(library.listBooks()); // ["1984", "Brave New World"]

// 7.
function Calculator() {}

Calculator.prototype.add = function (a, b) {
  return a + b;
};

Calculator.prototype.subtract = function (a, b) {
  return a - b;
};

Calculator.prototype.multiply = function (a, b) {
  return a * b;
};

Calculator.prototype.divide = function (a, b) {
  if (b === 0) {
    return `Cannot divide by zero`;
  }
  return a / b;
};

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 0)); // "Cannot divide by zero"

// 8.
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

// 9.
function Stack() {
  this.items = [];
}

Stack.prototype.push = function (num) {
  this.items.push(num);
};

Stack.prototype.pop = function () {
  if (this.items.length >= 1) {
    return this.items.pop();
  }
  return "Stack is empty";
};

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // "Stack is empty"

// 10.
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

const jn = new Person("John");
jn.addFriend("Alice");
jn.addFriend("Bob");
console.log(jn.listFriends()); // ["Alice", "Bob"]

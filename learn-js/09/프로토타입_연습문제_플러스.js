//Q1
function Vehicle(speed) {
  this.speed = speed;
}

// 여기에 accelerate 메서드를 추가하세요.
Vehicle.prototype.accelerate = function accelerate(speed) {
  this.speed += speed;
};

const car = new Vehicle(0);
car.accelerate(10);
console.log(car.speed); // 10

//Q2
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

// 여기에 Circle과 Rectangle의 getArea 메서드를 추가하세요.
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Circle.prototype.getArea = function getArea() {
  return this.radius ** 2 * 3.14;
};

Rectangle.prototype.getArea = function getArea() {
  return this.width * this.height;
};

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.getArea()); // 78.54
console.log(rectangle.getArea()); // 24

// Q3
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// 여기에 fullName 메서드를 추가하세요.
Person.prototype.fullName = function fullName() {
  return `${this.firstName} ${this.lastName}`;
};

const person = new Person("John", "Doe");
console.log(person.fullName()); // "John Doe"

// Q4
function BankAccount(initialBalance) {
  this.balance = initialBalance;
}

// 여기에 deposit 및 withdraw 메서드를 추가하세요.
BankAccount.prototype.deposit = function deposit(depositMoney) {
  this.balance += depositMoney;
};
BankAccount.prototype.withdraw = function withdraw(withdrawMoney) {
  this.balance -= withdrawMoney;
};

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120

// Q5
function Employee(baseSalary, bonus) {
  this.baseSalary = baseSalary;
  this.bonus = bonus;
}

// 여기에 getSalary 메서드를 추가하세요.
Employee.prototype.getSalary = function getSalary() {
  return this.baseSalary + this.bonus;
};

const employee = new Employee(3000, 500);
console.log(employee.getSalary()); // 3500

// Q6
function Library() {
  this.books = [];
}

// 여기에 addBook 및 listBooks 메서드를 추가하세요.
Library.prototype.addBook = function addBook(bookName) {
  this.books.push(bookName);
};
Library.prototype.listBooks = function listBooks() {
  return this.books;
};
const library = new Library();
library.addBook("1984");
library.addBook("Brave New World");
console.log(library.listBooks()); // ["1984", "Brave New World"]

// Q7
function Calculator() {}

// 여기에 add, subtract, multiply, divide 메서드를 추가하세요.
Calculator.prototype.add = function add(n1, n2) {
  return n1 + n2;
};
Calculator.prototype.subtract = function subtract(n1, n2) {
  return n1 - n2;
};
Calculator.prototype.multiply = function multiply(n1, n2) {
  return n1 * n2;
};
Calculator.prototype.divide = function divide(n1, n2) {
  return n1 / n2;
};

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 0)); // "Cannot divide by zero"

// Q8
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 여기에 isAdult 메서드를 추가하세요.
Person.prototype.isAdult = function isAdult() {
  return this.age >= 18;
};

const john = new Person("John", 20);
console.log(john.isAdult()); // true
const alice = new Person("Alice", 16);
console.log(alice.isAdult()); // false

// Q9
function Stack() {
  this.items = [];
}

// 여기에 push 및 pop 메서드를 추가하세요.
Stack.prototype.push = function push(num) {
  this.items.push(num);
};

Stack.prototype.pop = function pop() {
  if (this.items.length === 0) return "Stack is empty";
  return this.items.pop();
};

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // "Stack is empty"

//Q10
function Person(name) {
  this.name = name;
  this.friends = [];
}

// 여기에 addFriend 및 listFriends 메서드를 추가하세요.
Person.prototype.addFriend = function addFriend(name) {
  this.friends.push(name);
};
Person.prototype.listFriends = function addFriend() {
  return this.friends;
};

const john2 = new Person("John");
john2.addFriend("Alice");
john2.addFriend("Bob");
console.log(john2.listFriends()); // ["Alice", "Bob"]

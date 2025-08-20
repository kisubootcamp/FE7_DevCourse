// 연습 문제 +

// 1.
function Vehicle(speed) {
  this.speed = speed;
}

// 속도 증가 기능
Vehicle.prototype.accelerate = function (velocity) {
  this.speed += velocity;
};

const car = new Vehicle(0);
car.accelerate(10);
console.log(car.speed); // 10

// 2. ** 상속
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
// 상속
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
// 상속으로 가져오지 않고 오버라이드 함 (재정의 가능)
Circle.prototype.getArea = function () {
  return 3.14 * this.radius * this.radius;
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
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

// 여기에 fullName 메서드를 추가하세요.
Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person = new Person("John", "Doe");
console.log(person.fullName()); // "John Doe"

// 4.
function BankAccount(initialBalance) {
  this.balance = initialBalance;
}

// 여기에 deposit 및 withdraw 메서드를 추가하세요.
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120

// private
// 메서드가 둘로 쪼개져 있어서 불가능, 한 큐에 작성되어야 함

// 5.
function Employee(baseSalary, bonus) {
  this.baseSalary = baseSalary;
  this.bonus = bonus;
}

// 여기에 getSalary 메서드를 추가하세요.
Employee.prototype.getSalary = function () {
  return this.baseSalary + this.bonus;
};

const employee = new Employee(3000, 500);
console.log(employee.getSalary()); // 3500

// 6. *
function Library() {
  this.books = [];
}

// 여기에 addBook 및 listBooks 메서드를 추가하세요.
Library.prototype.addBook = function (book) {
  this.books.push(book);
};

Library.prototype.listBooks = function () {
  return this.books;
};

const library = new Library();
library.addBook("1984");
library.addBook("Brave New World");
console.log(library.listBooks()); // ["1984", "Brave New World"]

// 7. *
function Calculator() {}

// 여기에 add, subtract, multiply, divide 메서드를 추가하세요.
Calculator.prototype.add = function (a, b) {
  return a + b;
};
Calculator.prototype.subtract = function (a, b) {
  return a - b;
};
Calculator.prototype.multiply = function (a, b) {
  return a * b;
};
/*
Calculator.prototype.divide = function (a, b) {
  if (a > b && a !== 0 && b !== 0) return a / b;
  else if (a < b && a !== 0 && b !== 0) return b / a;
  else if (a === 0 || b === 0) return `"Cannot divide by zero"`;
};*/
Calculator.prototype.divide = function (a, b){
  if (a===0 || b===0)return `"Cannot divide by zero"`;
  return a/b;
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 0)); // "Cannot divide by zero"

// 8. *
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 여기에 isAdult 메서드를 추가하세요.
Person.prototype.isAdult = function () {
  return this.age >= 18;
  // 비교 연산자, 논리 연산자, 조건문 등은 boolean 값을 반환
};

const john = new Person("John", 20);
console.log(john.isAdult()); // true
// console.log(john.isAdult); 
// ㄴ 메서드 아닌 속성 접근하면 this가 가리키는게 윈도우가 되며 값이 달라짐
const alice = new Person("Alice", 16);
console.log(alice.isAdult()); // false

// 9. ** pass
function Stack() {
  this.items = [];
}

// 여기에 push 및 pop 메서드를 추가하세요.
/*
Stack.prototype.push = function (item){
  this.items.push(item);
}

Stack.prototype.pop = function (item){
  this.items.
} 
*/

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // "Stack is empty"

// 10. *
function Person(name) {
    this.name = name;
    this.friends = [];
}

// 여기에 addFriend 및 listFriends 메서드를 추가하세요.
Person.prototype.addFriend = function (friend) {
  this.friends.push(friend);
};

Person.prototype.listFriends = function () {
  return this.friends;
};  

const john = new Person("John");
john.addFriend("Alice");
john.addFriend("Bob");
console.log(john.listFriends()); // ["Alice", "Bob"]
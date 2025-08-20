// 1
function Vehicle(speed) {
    this.speed = speed;
}

// 여기에 accelerate 메서드를 추가하세요.
Vehicle.prototype.accelerate = function (speed) {
    this.speed += speed;
}

const car = new Vehicle(0);
car.accelerate(10);
console.log(car.speed); // 10


// 2
function Shape() {}

Shape.prototype.getArea = function() {
    throw new Error("getArea() must be implemented");
};

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
    return 2 * 3.14 * this.radius;
}

function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
}

// 여기에 Circle과 Rectangle의 getArea 메서드를 추가하세요.
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.getArea()); // 78.54
console.log(rectangle.getArea()); // 24


// 3
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// 여기에 fullName 메서드를 추가하세요.
Person.prototype.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}

const person = new Person("John", "Doe");
console.log(person.fullName()); // "John Doe"


// 4
function BankAccount(initialBalance) {
    this.balance = initialBalance;
}

// 여기에 deposit 및 withdraw 메서드를 추가하세요.
BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
}
BankAccount.prototype.withdraw = function(amount) {
    this.balance -= amount;
}

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120


// 5
function Employee(baseSalary, bonus) {
    this.baseSalary = baseSalary;
    this.bonus = bonus;
}

// 여기에 getSalary 메서드를 추가하세요.
Employee.prototype.getSalary = function () {
    return this.baseSalary + this.bonus;
}


const employee = new Employee(3000, 500);
console.log(employee.getSalary()); // 3500


function Library() {
    this.books = [];
}

// 여기에 addBook 및 listBooks 메서드를 추가하세요.
Library.prototype.addBook = function(book) {
    this.books.push(book);
}
Library.prototype.listBooks = function() {
    return this.books;
}

const library = new Library();
library.addBook("1984");
library.addBook("Brave New World");
console.log(library.listBooks()); // ["1984", "Brave New World"]


// 7
function Calculator() {}

// 여기에 add, subtract, multiply, divide 메서드를 추가하세요.
Calculator.prototype.add = function(a, b) {
    return a + b;
}
Calculator.prototype.subtract = function(a, b) {
    return a - b;
}
Calculator.prototype.multiply = function(a, b) {
    return a * b;
}
Calculator.prototype.divide = function(a, b) {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
}

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 0)); // "Cannot divide by zero"


// 8
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 여기에 isAdult 메서드를 추가하세요.
Person.prototype.isAdult = function() {
    if (this.age >= 18) return true;
    return false;
}

const john = new Person("John", 20);
console.log(john.isAdult()); // true
const alice = new Person("Alice", 16);
console.log(alice.isAdult()); // false


// 9
function Stack() {
    this.items = [];
}

// 여기에 push 및 pop 메서드를 추가하세요.
Stack.prototype.push = function(item) {
    this.items.push(item);
}
Stack.prototype.pop = function() {
    if (!this.items.length) return "Stack is empty";
    return this.items.pop();
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // "Stack is empty"


// 10
function Person(name) {
    this.name = name;
    this.friends = [];
}

// 여기에 addFriend 및 listFriends 메서드를 추가하세요.
Person.prototype.addFriend = function(friend) {
    this.friends.push(friend);
}
Person.prototype.listFriends = function(friend) {
    return this.friends;
}

const a = new Person("John");
a.addFriend("Alice");
a.addFriend("Bob");
console.log(a.listFriends()); // ["Alice", "Bob"]
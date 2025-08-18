// 연습문제
// 1.
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function () {
//   return `Hello, my name is ${this.name}`;
// };

// const john = new Person('John');
// console.log(john.greet());

// // 2.
// function Car(brand) {
//   this.brand = brand;
// }

// Car.prototype.start = function () {
//   return `The car has started`;
// };

// const myCar = new Car('Toyota');
// console.log(myCar.start());

// // 3.
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.area = function () {
//   return this.width * this.height;
// };

// const rect = new Rectangle(5, 10);
// console.log(rect.area());

// // 4.
// function Animal() {}

// Animal.prototype.speak = function () {
//   return console.log(`Animal makes a sound`);
// };

// const animal = new Animal();
// animal.speak();

// // 5.
// function Dog(name) {
//   this.name = name;
// }

// Dog.prototype.speak = function () {
//   console.log('Animal makes a sound');
// };

// Dog.prototype.speak = function () {
//   console.log('Woof!');
// };

// const dog = new Dog('Buddy');
// dog.speak();

// // 6.
// function Student(name) {
//   this.name = name;
// }

// Student.prototype.introduce = function () {
//   return console.log(`Hi, I'm ${this.name} and I'm a student.`);
// };

// const student = new Student('Alice');
// student.introduce();

// // 7.
// function Book(title, author) {
//   this.title = title;
//   this.author = author;
// }

// Book.prototype.getSummary = function () {
//   return `Title: ${this.title}, Author: ${this.author}`;
// };

// const book = new Book('1984', 'George Orwell');
// console.log(book.getSummary());

// // 8.
// function Shape() {}

// Shape.prototype.getType = function () {
//   return console.log(`I am a shape.`);
// };

// const shape = new Shape();
// shape.getType();

// // 9.
// function Circle(radius) {
//   this.radius = radius;
// }

// Circle.prototype.getCircumference = function () {
//   return this.radius * 2 * 3.14;
// };

// const circle = new Circle(5);
// console.log(circle.getCircumference());

// // 10.
// function Employee(name, position) {
//   this.name = name;
//   this.position = position;
// }

// Employee.prototype.getDetails = function () {
//   return `Name: ${this.name}, Position: ${this.position}`;
// };

// const employee = new Employee('Bob', 'Developer');
// console.log(employee.getDetails());

// 연습문제 +
// 1.
// function Vehicle(speed) {
//   this.speed = speed;
// }

// Vehicle.prototype.accelerate = function (speed) {
//   this.speed += speed;
// };

// const car = new Vehicle(0);
// car.accelerate(10);
// console.log(car.speed); // 10

// // 2.
// function Shape() {}

// Shape.prototype.getArea = function () {
//   throw new Error('getArea() must be implemented');
// };

// function Circle(radius) {
//   this.radius = radius;
// }

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// Circle.prototype.getArea = function () {
//   return this.radius * this.radius * 3.14;
// };

// Rectangle.prototype.getArea = function () {
//   return this.width * this.height;
// };

// const circle = new Circle(5);
// const rectangle = new Rectangle(4, 6);
// console.log(circle.getArea()); // 78.54
// console.log(rectangle.getArea()); // 24

// // 3.
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.fullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// const person = new Person('John', 'Doe');
// console.log(person.fullName()); // "John Doe"

// // 4.
// function BankAccount(initialBalance) {
//   this.balance = initialBalance;
// }

// BankAccount.prototype.deposit = function (money) {
//   this.balance += money;
// };

// BankAccount.prototype.withdraw = function (money) {
//   this.balance -= money;
// };

// const account = new BankAccount(100);
// account.deposit(50);
// console.log(account.balance); // 150
// account.withdraw(30);
// console.log(account.balance); // 120

// // 5.
// function Employee(baseSalary, bonus) {
//   this.baseSalary = baseSalary;
//   this.bonus = bonus;
// }

// Employee.prototype.getSalary = function () {
//   return this.baseSalary + this.bonus;
// };

// const employee = new Employee(3000, 500);
// console.log(employee.getSalary()); // 3500

// // 6.
// function Library() {
//   this.books = [];
// }

// Library.prototype.addBook = function (book) {
//   this.books.push(book);
// };

// Library.prototype.listBooks = function () {
//   return this.books;
// };

// const library = new Library();
// library.addBook('1984');
// library.addBook('Brave New World');
// console.log(library.listBooks()); // ["1984", "Brave New World"]

// // 7.
// function Calculator() {}

// Calculator.prototype.add = function (num1, num2) {
//   return num1 + num2;
// };
// Calculator.prototype.subtract = function (num1, num2) {
//   return num1 - num2;
// };
// Calculator.prototype.multiply = function (num1, num2) {
//   return num1 * num2;
// };
// Calculator.prototype.divide = function (num1, num2) {
//   if (!!num1 || !!num2) return `Cannot divide by zero`;
//   return num1 / num2;
// };

// const calc = new Calculator();
// console.log(calc.add(5, 3)); // 8
// console.log(calc.subtract(5, 3)); // 2
// console.log(calc.multiply(5, 3)); // 15
// console.log(calc.divide(5, 0)); // "Cannot divide by zero"

// // 8.
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.isAdult = function () {
//   return this.age >= 18 ? true : false;
// };

// const john = new Person('John', 20);
// console.log(john.isAdult()); // true
// const alice = new Person('Alice', 16);
// console.log(alice.isAdult()); // false

// 9.
// function Stack() {
//   this.items = [];
// }

// Stack.prototype.push = function (num) {
//   this.items.push(num);
// };

// Stack.prototype.pop = function () {
//   let num = this.items[this.items.length - 1];
//   this.items.pop(num);
//   return num ? num : 'Stack is empty';
// };

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// console.log(stack.pop()); // 2
// console.log(stack.pop()); // 1
// console.log(stack.pop()); // "Stack is empty"

// 10.
// function Person(name) {
//   this.name = name;
//   this.friends = [];
// }

// Person.prototype.addFriend = function (name) {
//   this.friends.push(name);
// };

// Person.prototype.listFriends = function () {
//   return this.friends;
// };

// const john = new Person('John');
// john.addFriend('Alice');
// john.addFriend('Bob');
// console.log(john.listFriends()); // ["Alice", "Bob"]

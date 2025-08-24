// 생성자 함수 연습 문제

// 1
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    console.log(`model: ${this.model}, make: ${this.make}`);
  };
}

// 2
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = function () {
    console.log(`name: ${this.name}, grade: ${this.grade}`);
  };
}

// 3
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = function () {
    console.log(`${this.name} speak`);
  };
}

// 4
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    console.log(
      `title: ${this.title}, author: ${this.author}, year: ${this.year}`
    );
  };
}

// 5
function BankAccount(balance) {
  this.balance = balance;
  this.deposit = function (money) {
    this.balance += money;
  };
  this.withdraw = function (money) {
    this.balance -= money;
  };
  this.getBalance = function () {
    console.log(`balance: ${this.balance}`);
  };
}

// 6
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
  this.perimeter = function () {
    return (this.width + this.height) * 2;
  };
}

// 7
function Airplane(model, capacity) {
  this.model = model;
  this.capacity = capacity;
  this.fly = function () {
    console.log(`model: ${this.model}, capacity: ${this.capacity}, flying`);
  };
}

// 8
function Team(name, members) {
  this.name = name;
  this.members = [];
  this.addMember = function (member) {
    this.members.push(member);
  };
}

// 9
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    console.log(
      `title: ${this.title}, director: ${this.director}, year: ${this.year}`
    );
  };
}

// 10
function Time(hour, min, sec) {
  this.hour = hour;
  this.min = min;
  this.sec = sec;
  this.getTime = function () {
    console.log(`${this.hour}:${this.min}:${this.sec}`);
  };
}

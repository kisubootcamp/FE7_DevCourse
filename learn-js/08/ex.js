//1

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    console.log(this.model, this.make);
  };
}

let car = new Car("BMW", "mola", 2025);
car.drive();

//2
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = function () {
    console.log(`name : ${this.name}, grade: ${this.grade}`);
  };
}

//3
function Animal(name, att) {
  this.name = name;
  this.att = att;
  this.speak = function () {
    console.log("크와앙ㅇ");
  };
}

function Book(name, writer, year) {
  this.name = name;
  this.writer = writer;
  this.year = year;
  this.getSummary = function () {
    console.log(this.name, this.writer);
  };
}

function BankAccount(money) {
  this.money = money;
  this.deposit = function (add) {
    money += add;
  };
  this.withdraw = function (minus) {
    money -= minus;
  };
  this.getBalance = function () {
    console.log(`현재 잔액:  ${this.money}`);
  };
}

function Rectangle(w, h) {
  this.width = w;
  this.height = h;
  this.area = function () {
    this.width * this.height;
  };
  this.perimeter = function () {
    2 * (this.width + this.height);
  };
}

function Airplane(model, capacity) {
  this.model = model;
  this.capacity = capacity;
  this.fly = function () {
    console.log(this.model, this.capacity);
  };
}

function Team(name) {
  this.name = name;
  this.members = [];
  this.addMember = function (str) {
    this.members.push(str);
  };
}

function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    console.log(`title: ${this.title}, 감독: ${this.director}`);
  };
}

function Time(h, m, s) {
  this.hour = h;
  this.minute = m;
  this.second = s;
  this.getTime = function () {
    console.log(`${this.hour}:${this.minute}:${this.second}:`);
  };
}

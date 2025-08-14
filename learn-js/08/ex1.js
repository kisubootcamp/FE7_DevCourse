// 생성자 함수 연습문제

//1
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const drive = new Car("현대", "아반떼", "2022년식");
console.log(drive);

//2
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = function () {
    return `${this.name}, ${(this, grade)}`;
  };
}

const getInfo = new Student("송주원", "4학년");
console.log(getInfo.getInfo());

//3
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = function () {
    return `${this.name}가 소리를 냅니다`;
  };
}

const speak = new Animal("곰이", "고양이");
console.log(speak);

//4
function Book(title, author, year) {
  this.title = title;
  this.person = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title}, ${this.author}, ${this.year}`;
  };
}

const book1 = new Book("코딩 자율 학습 리액트", "김기수", 2025);
console.log(book1);

//5
function BankAccount(initialBalance) {
  this.balance = initialBalance;
  this.deposit = function (amount) {
    this.balance += amount;
  };
  this.withdraw = function (amount) {
    this.balance -= amount;
  };
  this.getBalance = function () {
    return this.balance;
  };
}
const Bank = new BankAccount(0);
Bank.deposit(1000);
console.log(Bank.getBalance());
Bank.withdraw(500);
console.log(Bank.getBalance());

//6
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.heigth;
  };
  this.perimeter = function () {
    return this.width * 2 + this.heigth * 2;
  };
}

const rect = new Rectangle(10, 20);
console.log(rect);

//7

function Airplane(model, capacity, fly) {
  this.model = model;
  this.capacity = capacity;
  this.fly = fly;
}

const plane = new Airplane("비행기", "로켓", "잘 날아");
console.log(plane);

//8
function Team(name, member) {
  this.name = name;
  this.members = member;
  this.addMember = function (memberName) {
    this.members.push(memberName);
  };
}

const lol = new Team("SKT", []);
lol.addMember("faker");
lol.addMember("doran");
console.log(lol);

//9
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    return `${this.title}, ${this.director},${this.year}`;
  };
}

const movie = new Movie("슈퍼맨", "모름", 2025);

//10

function Time(hour, minute, second) {
  this.hour = hour;
  this.minute = minute;
  this.second = second;
  this.getTime = function () {
    return `${this.hour}: ${this.minute}: ${this.second}`;
  };
}

const showTime = new Time(1, 30, 20);
console.log(showTime.getTime());

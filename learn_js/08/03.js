// 1.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    return `모델: ${this.model}, 제조사: ${this.make}, 연식: ${this.year}`;
  };
}
const car1 = new Car('bmw', 'i3', 25);
console.log(car1.drive());

// 2.
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = function () {
    return `이름은 ${this.name}, 학년은 ${this.grade}입니다.`;
  };
}
const student1 = new Student('한수', 3);
console.log(student1.getInfo());

// 3.
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = function () {
    return `${this.name}가 소리를 냅니다.`;
  };
}
const animal1 = new Animal('나비', '고양이');
console.log(animal1.speak());

// 4.
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `요약정보`;
  };
}
const book = new Book('목적이 이끄는 삶', '릭워렌', 2003);
console.log(book);

// 5
function BankAccount(account) {
  this.account = account;
  this.deposit = function (c) {
    this.account += c;
    return `잔액: ${this.account}`;
  };
  this.withdraw = function (c) {
    this.account -= c;
    return `잔액: ${this.account}`;
  };
  this.getBalance = function () {
    return this.account;
  };
}
const bank = new BankAccount(0);
bank.deposit(1000);
console.log(bank.getBalance());
bank.withdraw(500);
console.log(bank.getBalance());

// 6
function Rectangle(width, heigh) {
  this.width = width;
  this.heigh = heigh;
  this.area = function () {
    return this.width * this.heigh;
  };
  this.perimeter = function () {
    return this.width * 2 + this.heigh * 2;
  };
}
const rect = new Rectangle(10, 20);
console.log(rect);

// 7.
function Airplane(model, capacity) {
  this.model = model;
  this.capacity = capacity;
  this.fly = function () {
    return `${this.model}, ${this.capacity}`;
  };
}
const air = new Airplane('대한항공', 400);
console.log(air);

// 8.
function Team(name, member) {
  this.name = name;
  this.member = member;
  this.addMember = function (memberName) {
    this.member.push(memberName);
  };
}

const lol = new Team('T1', []);
lol.addMember('Faker');
lol.addMember('gumausi');
lol.addMember('doran');
console.log(lol);

// 9
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    return `${this.title}, ${this.director}, ${this.year}`;
  };
}

const movie = new Movie('슈퍼맨', '모름', 2025);
console.log(movie);

// 10
function Time(hour, minute, second) {
  this.hour = hour;
  this.minute = minute;
  this.second = second;
  this.getTime = function () {
    return `${this.hour}:${this.minute}:${this.second}`;
  };
}

const time1 = new Time(12, 15, 0);
console.log(time1.getTime());

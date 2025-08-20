// 연습 문제

// 1.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    return `model ${this.model}, made by ${this.make} in ${this.year}`;
  };
}
const car1 = new Car("KIA", "K8", 2024);
console.log(car1.drive());

// 2.
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = function () {
    return `이름은 ${this.name}이고, ${this.grade}학년이다.`;
  };
}
const student1 = new Student("수연", 1);
console.log(student1.getInfo());

// 3.
function Animal(name, type, sound) {
  //this.name = name;
  this.type = type;
  this.sound = sound;
  this.speak = function () {
    return `${this.type}는 ${this.sound}`;
  };
}
const animal1 = new Animal("daniel", "dog", "멍멍");
console.log(animal1.speak());

// 4.
function Book(name, writer, year, summary) {
  this.name = name;
  //this.writer = writer;
  //this.year = year;
  this.summary = summary;
  this.getSummary = function () {
    return `${this.name}은 '${this.summary}'라는 내용의 책입니다.`;
  };
}
const book1 = new Book(
  "톰 소여의 모험",
  "마크 트웨인",
  1876,
  "톰 소여가 모험을 하는 이야기"
);
console.log(book1.getSummary());

// 5. *
function BankAccount(firstBalance) {
  this.firstBalance = firstBalance;
  this.deposit = function (amount) {
    return (this.firstBalance += amount);
  };
  this.withdraw = function (amount) {
    return (this.firstBalance -= amount);
  };
  this.getBalance = function () {
    return this.firstBalance;
  };
}
const bankaccount1 = new BankAccount(100000);
console.log(bankaccount1.deposit(100));
console.log(bankaccount1.withdraw(200));
console.log(bankaccount1.getBalance());

// 6.
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
  this.perimeter = function () {
    return 2 * (this.width + this.height);
  };
}
const rectangle1 = new Rectangle(5, 10);
console.log(rectangle1.area());
console.log(rectangle1.perimeter());

// 7.
function Airplane(model, capacity) {
  this.model = model;
  this.capacity = capacity;
  this.fly = function () {
    return `${this.model}, ${this.capacity}`;
  };
}
const airpalne1 = new Airplane("대한항공", 300);
console.log(airpalne1.fly());

// 8. ** ?
function Team(name, members) {
  this.name = name;
  this.members = members;
  this.addMember = function (memberName) {
    this.members.push(memberName);
    return this.members;
  };
}
const team1 = new Team("3팀", []);
console.log(team1.addMember("Me"));

// 9.
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    return `${this.title}은/는 ${this.director}의 작품으로 ${this.year}년에 개봉했습니다.`;
  };
}
const movei1 = new Movie("옥자", "봉준호", 2017);
console.log(movei1.getDetails());

// 10.
function Time(hour, min, sec) {
  this.hour = hour;
  this.min = min;
  this.sec = sec;
  this.getTime = function () {
    return `지금 시간은 ${this.hour}시 ${this.min}분 ${this.sec}초 입니다.`;
  };
}
const time1 = new Time(11, 32, 23);
console.log(time1.getTime());

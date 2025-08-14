// 연습문제
// 1.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = () => {
    console.log(`${this.model}, ${this.make}`);
  };
}
const car1 = new Car('bmw', 'bmw11', '2020');
car1.drive();

// 2.
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = () => {
    console.log(`${this.name}입니다.`);
  };
}
const student1 = new Student('이현준', 'A');
student1.getInfo();

// 3.
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = () => {
    if (this.type === '고양이') console.log('야용');
    if (this.type === '강아지') console.log('멍멍');
  };
}
const animal1 = new Animal('철수', '강아지');
animal1.speak();

// 4.
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = () => {
    console.log(`책 제목: ${this.title}, 책 저자: ${this.author}`);
  };
}
const book1 = new Book('졸리다', '이현준', 2025);
book1.getSummary();

// 5.
function BankAccount(account = 10000) {
  this.account = account;
  this.deposit = (money) => {
    this.account += money;
    return `현재잔액: ${this.account}`;
  };
  this.withdraw = (money) => {
    if (this.account < money) return '돈이 부족합니다';
    this.account -= money;
    return `남은잔액: ${this.account}`;
  };
  this.getBalance = () => {
    return `현재잔액: ${this.account}`;
  };
}
const account1 = new BankAccount();
console.log(account1.deposit(30000));
console.log(account1.withdraw(30000));

// 6.
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = () => {
    return width * height;
  };
  this.perimeter = () => {
    return (width + height) * 2;
  };
}
const rec1 = new Rectangle(9, 5);
console.log(rec1.area());
console.log(rec1.perimeter());

// 7.
function Airplane(model, capacity, fly) {
  this.model = model;
  this.capacity = capacity;
  this.fly = fly;
  this.getInfo = () => {
    console.log(`${this.model}, ${this.capacity}, ${this.fly}`);
  };
}
const air1 = new Airplane('경비행기', '123', 1);
air1.getInfo();

// 8.
function Team(name, members) {
  this.name = name;
  this.members = members;
  this.addMember = (name) => {
    this.members.push(name);
    return this.members;
  };
}
const team1 = new Team('강팀', ['김현준', '박현준']);
console.log(team1.addMember('오현준'));

// 9.
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetail = () => {
    console.log(
      `제목: ${this.title}, 감독: ${this.director}, 연도: ${this.year}`
    );
  };
}
const movie1 = new Movie('기생충', '봉준호', 2016);
movie1.getDetail();

// 10.
function Time(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
  this.getTime = () => {
    console.log(
      `현재시간: ${this.hours}시 ${this.minutes}분 ${this.seconds}초`
    );
  };
}
const time1 = new Time(11, 28, 10);
time1.getTime();

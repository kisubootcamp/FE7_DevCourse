// 1
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.carInfo = function () {
    return `모델명 : ${this.model}, 제조사 : ${make}`;
  };
}
const car1 = new Car("G80", "제네시스");
console.log(car1.carInfo());

// 2
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.studentInfo = function () {
    return `이름 : ${this.name}, 학년 : ${this.grade}`;
  };
}
const student1 = new Student("김민선", 4);
console.log(student1.studentInfo());

// 3
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = function () {
    return `${this.name}은 야옹`;
  };
}
const animal1 = new Animal("냥이", "고양이");
console.log(animal1.speak());

// 4
function Book(title, name, year) {
  this.title = title;
  this.name = name;
  this.year = year;
  this.getSummary = function () {
    return `책 제목 : ${this.title}, 저자 : ${this.name}, 출판 연도 : ${this.year}`;
  };
}
const book1 = new Book("어린왕자", "생텍쥐베리", 1943);
console.log(book1.getSummary());

// 5
function BankAccount(account) {
  this.account = account;
  this.deposit = function (amount) {
    if (amount > 0) {
      this.account += amount;
      console.log(`${amount}원 입금`);
    }
  };
  this.withdraw = function (amount) {
    if (amount > 0 && amount <= this.account) {
      this.account -= amount;
      console.log(`${amount}원 출금`);
    }
  };
  this.getBalance = function () {
    return this.account;
  };
}
const bank1 = new BankAccount(1000);
console.log("잔액:", bank1.getBalance());
bank1.deposit(500);
console.log("잔액:", bank1.getBalance());
bank1.withdraw(300);
console.log("잔액:", bank1.getBalance());

// 6
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return `면적 : ${this.width * this.height}`;
  };
  this.perimeter = function () {
    return `둘레 : ${2 * (this.width + this.height)}`;
  };
}
const rect1 = new Rectangle(5, 10);
console.log(rect1.area());
console.log(rect1.perimeter());

// 7
function Airplane(model, capacity) {
  this.model = model;
  this.capacity = capacity;
  this.fly = function () {
    return `모델명 : ${this.model}, 승객 : ${this.capacity}명, 비행중`;
  };
}
const plane1 = new Airplane("Boeing 747", 416);
console.log(plane1.fly());

// 8
function Team(name, members) {
  this.name = name;
  this.members = members;
  this.addMember = function () {
    return `팀명 : ${this.name}, 새로온 팀원 : ${this.members}`;
  };
}
const team1 = new Team("6팀", "민선");
console.log(team1.addMember());

// 9
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetail = function () {
    return `타이틀 명 : ${this.title}, 감독 : ${this.director}, 개봉연도 : ${this.year}`;
  };
}
const movie1 = new Movie("Interstellar", "크리스토퍼 놀란", 2014);
console.log(movie1.getDetail());

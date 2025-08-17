function Car(make, model, year) {
  // 1) 매개변수 받기
  this.make = make;
  this.model = model;
  this.year = year;

  this.drive = function () {
    // 2) 인스턴스 메서드로 연결
    return `출력해요 ${this.make}, 또해요 ${this.model}`; // 3) 템플릿 ${}
  };
}

const myCar = new Car("Hyundai", "Avante", 2023);
console.log(myCar.drive()); //

function Student(name, grade) {
  this.name = name;
  this.grade = grade;

  this.getInfo = function () {
    return `학생 이름은 ${this.name}, 학년은 ${this.grade}입니다.`;
  };
}
const Student1 = new Student("홍길동", 3);
console.log(Student1.getInfo());

function Animal(name, type) {
  this.name = name;
  this.type = type;
}

function book(title, year, author) {
  this.title = title;
  this.year = year;
  this.author = author;
  this.getSummary = function () {
    return `${this.title}는 ${this.year}년에 출판되었고, 저자는 ${this.author}입니다.`;
  };
}
const book1 = new book("JavaScript Basics", 2023, "John Doe");
console.log(book1.getSummary());

function BankAccount(change) {
  this.change = change; // change 잔액
}
function deposit(amount) {
  this.change += amount;
  return `입금액: ${amount}, 잔액: ${this.change}`;
}
function withdraw(amount) {
  if (this.change >= amount) {
    this.change -= amount;
    return `출금액: ${amount}, 잔액: ${this.change}`;
  } else {
    return `잔액이 부족합니다. 현재 잔액: ${this.change}`;
  }
}
function getBalance() {
  return `현재 잔액: ${this.change}`;
}

//8
function Team(name, members) {
  this.name = name;
  this.members = [];
  this.addMembers = function (members) {
    this.members.push(members);
    return `팀 ${this.name}에 ${members}가 추가되었습니다.`;
  };
}

let team1 = new Team("개발팀", "홍길동", "김철수");

team1.addMembers("이영희");
team1.addMembers("이상엽");
console.log(team1);

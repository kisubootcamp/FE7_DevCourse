// 1. 자동차 객체 만들기
// 자동차 객체를 생성하는 `Car` 생성자 함수를 만드세요. 자동차는 `make`, `model`, `year` 속성을 가지며, `drive` 메서드를 통해 자동차의 모델과 제조사를 출력합니다.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    return `자동차 모델: ${model}, 제조사: ${make}, 제조년도: ${year}`;
  };
}
const car1 = new Car("현대", "펠리세이드", 2025);
console.log(car1.drive());

// 2. 학생 객체 만들기
// 학생 객체를 생성하는 Student 생성자 함수를 만드세요. 학생은 name, grade 속성을 가지며, getInfo 메서드를 통해 학생 정보를 출력합니다.
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = function () {
    return `이름: ${name}, 성적: ${grade}점`;
  };
}
const std1 = new Student("김길동", 99);
console.log(std1.getInfo());

// 3. 동물 객체 만들기
// Animal 생성자 함수를 만들어서, 동물의 이름과 종류를 속성으로 갖고, speak 메서드를 통해 소리를 내는 기능을 추가하세요.
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = function () {
    return `${name}가 소리를 냅니다.`;
  };
}
const animal1 = new Animal("바둑이", "개");
console.log(animal1.speak());

// 4. 도서 객체 만들기
// Book 생성자 함수를 만들어서, 책의 제목, 저자, 출판 연도를 속성으로 갖고, getSummary 메서드를 통해 책의 요약 정보를 출력하세요.
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `책 이름: ${title}, 저자: ${author}, 출판 연도: ${year}`;
  };
}
const book = new Book("가시", "홍길동", 1234);
console.log(book.getSummary());

// 5. 은행 계좌 객체 만들기
// BankAccount 생성자 함수를 만들어서, 계좌의 초기 잔고를 설정하고, deposit, withdraw, getBalance 메서드를 구현하세요.
function BankAccount(balance) {
  this.balance = balance;
  this.deposit = function (amount) {
    if (amount > 0) {
      this.balance += amount;
      return `${amount}원이 입금되었습니다.`;
    } else {
      return `입금 금액은 0원보다 커야 합니다.`;
    }
  };

  this.withdraw = function (amount) {
    if (amount > this.balance) {
      return `잔액이 부족합니다.`;
    } else if (amount > 0) {
      this.balance -= amount;
      return `${amount}원이 출금되었습니다.`;
    } else {
      return `출금 금액은 0원보다 커야 합니다.`;
    }
  };

  this.getBalance = function () {
    return `잔액: ${this.balance}`;
  };
}
const bankaccount = new BankAccount(30000);
console.log(bankaccount.deposit(50000));
console.log(bankaccount.withdraw(20000));
console.log(bankaccount.getBalance());

// 6. 사각형 객체 만들기
// Rectangle 생성자 함수를 만들어서, 가로와 세로 길이를 속성으로 갖고, area와 perimeter 메서드를 통해 면적과 둘레를 계산하세요.
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return `넓이: ${width * height}`;
  };
  this.perimeter = function () {
    return `둘레: ${(this.width + this.height) * 2}`;
  };
}
const rectangle = new Rectangle(5, 3);
console.log(rectangle.area());
console.log(rectangle.perimeter());

// 7. 비행기 객체 만들기
// Airplane 생성자 함수를 만들어서, 비행기의 model, capacity, fly 메서드를 구현하여 비행기가 비행하는 정보를 출력하세요.
function Airplane(model, capacity, fly) {
  this.model = model;
  this.capacity = capacity;
  this.fly = function () {
    return `${this.model} 비행기가 ${this.capacity}명 탑승하고 비행 중입니다.`;
  };
}
const plane1 = new Airplane("Boeing 747", 400);
console.log(plane1.fly());

// 8. 팀 객체 만들기
// Team 생성자 함수를 만들어서, 팀의 name과 members 속성을 갖고, addMember 메서드를 통해 팀원 추가 기능을 구현하세요.
function Team(name, members) {
  this.name = name;
  this.members = members;
  this.addMember = function (member) {
    this.members.push(member);
    return `추가된 멤버: ${this.member}, 현재 ${this.name}팀 멤버: ${this.members}`;
  };
}
const teamA = new Team("1", ["영희", "철수"]);
console.log(teamA.addMember("길동"));

// 9. 영화 객체 만들기
// Movie 생성자 함수를 만들어서, 영화의 title, director, year 속성을 갖고, getDetails 메서드를 통해 영화 정보를 출력하세요.
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    return `영화 제목: ${this.title}, 영화 감독: ${this.director}, 영화 개봉: ${this.year}년`;
  };
}
const movie = new Movie("괴물", "감독", 1999);
console.log(movie.getDetails());
movie.title = "음악";
console.log(movie.getDetails());

// 10. 시간 객체 만들기
// Time 생성자 함수를 만들어서, 시간을 시, 분, 초로 설정하고, getTime 메서드를 통해 시간을 출력하세요.
function Time(hour, min, sec) {
  this.hour = hour;
  this.min = min;
  this.sec = sec;
  this.getTime = function () {
    return `현재 시간: ${this.hour}시 ${this.min}분 ${this.sec}초`;
  };
}
const time = new Time(1, 1, 1);
console.log(time.getTime());

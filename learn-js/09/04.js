// ## 문제 1: 자동차 객체 만들기

// **문제:** 자동차 객체를 생성하는 `Car` 생성자 함수를 만드세요. 자동차는 `make`, `model`, `year` 속성을 가지며, `drive` 메서드를 통해 자동차의 모델과 제조사를 출력합니다.

function Car(model, year) {
  this.make;
  this.model = model;
  this.year = year;
}

Car.prototype.drive = function () {
  return `model: ${this.model} year: ${this.year}`;
};

const car = new Car("BMW", "2001");
console.log(car.drive());

// ## 문제 2: 학생 객체 만들기

// **문제:** 학생 객체를 생성하는 `Student` 생성자 함수를 만드세요. 학생은 `name`, `grade` 속성을 가지며, `getInfo` 메서드를 통해 학생 정보를 출력합니다.

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

Student.prototype.getInfo = function () {
  return `name: ${this.name} grade: ${this.grade}`;
};

const st1 = new Student("홍길동", "1학년");
console.log(st1.getInfo());

// ## 문제 3: 동물 객체 만들기

// **문제:** `Animal` 생성자 함수를 만들어서, 동물의 이름과 종류를 속성으로 갖고, `speak` 메서드를 통해 소리를 내는 기능을 추가하세요.

function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.speak = function () {
  if (this.type === "dog") return `멍멍`;
  else return `야옹`;
};

const am = new Animal("초코", "dog");
console.log(am.speak());

// ## 문제 4: 도서 객체 만들기

// **문제:** `Book` 생성자 함수를 만들어서, 책의 제목, 저자, 출판 연도를 속성으로 갖고, `getSummary` 메서드를 통해 책의 요약 정보를 출력하세요.

function Book() {
  this.name = "홍길동전";
  this.author = "미상";
  this.year = "옛날";
  this.getSummary = function () {
    return `name: ${this.name}, author: ${this.author}, year: ${this.year}`;
  };
}

const book = new Book();
console.log(book.getSummary());

// ## 문제 5: 은행 계좌 객체 만들기

// **문제:** `BankAccount` 생성자 함수를 만들어서, 계좌의 초기 잔고를 설정하고, `deposit`, `withdraw`, `getBalance` 메서드를 구현하세요.

// - deposit: 입금 처리 기능
// - withdraw: 출금 처리 기능
// - getBalance: 현재 잔액

function BankAccount() {
  this.balance = 20000;

  this.deposit = function (money) {
    this.balance += money;
  };
  this.withdraw = function (money) {
    this.balance -= money;
  };
  this.getBalance = function () {
    return `현재 잔액: ${this.balance}`;
  };
}

const b = new BankAccount();
b.deposit(10000);
b.withdraw(20000);
console.log(b.getBalance());

// ## 문제 6: 사각형 객체 만들기

// **문제:** `Rectangle` 생성자 함수를 만들어서, 가로와 세로 길이를 속성으로 갖고, `area`와 `perimeter` 메서드를 통해 면적과 둘레를 계산하세요.

function Rectangle() {
  this.width = 10;
  this.length = 20;
  this.area = function () {
    return `area: ${this.width * this.length}`;
  };
  this.perimeter = function () {
    return `area: ${(this.width + this.length) * 2}`;
  };
}

const r = new Rectangle();
console.log(r.area());
console.log(r.perimeter());

// ## 문제 7: 비행기 객체 만들기

// **문제:** `Airplane` 생성자 함수를 만들어서, 비행기의 `model`, `capacity`, `fly` 메서드를 구현하여 비행기가 비행하는 정보를 출력하세요.

function Airplane() {
  this.model = "아시아나";
  this.capacity = "100인승";
  this.fly = function () {
    return `model: ${this.model} capacity: ${this.capacity}`;
  };
}

const a = new Airplane();
console.log(a.fly());

// ## 문제 8: 팀 객체 만들기

// **문제:** `Team` 생성자 함수를 만들어서, 팀의 `name`과 `members` 속성을 갖고, `addMember` 메서드를 통해 팀원 추가 기능을 구현하세요.

function Team() {
  this.name = "한화이글스";
  this.members = ["류현진", "손아섭"];
  this.addMember = function (addName) {
    this.members.push(addName);
    return this.members;
  };
}

const t = new Team();
console.log(t.addMember("문동주"));

// ## 문제 9: 영화 객체 만들기

// **문제:** `Movie` 생성자 함수를 만들어서, 영화의 `title`, `director`, `year` 속성을 갖고, `getDetails` 메서드를 통해 영화 정보를 출력하세요.

function Movie() {
  this.title = "홍길동전";
  this.director = "홍길동";
  this.year = "2021";
  this.getDetails = function () {
    return `title: ${this.title} director: ${this.director} year: ${this.year}`;
  };
}

const m = new Movie();
console.log(m.getDetails());

// ## 문제 10: 시간 객체 만들기

// **문제:** `Time` 생성자 함수를 만들어서, 시간을 시, 분, 초로 설정하고, `getTime` 메서드를 통해 시간을 출력하세요.
function Time() {
  this.hour = 2;
  this.minute = 2;
  this.second = 2;
  this.getTime = function () {
    return `${this.hour}시 ${this.minute}분 ${this.second}초`;
  };
}

const time = new Time();
console.log(time.getTime());

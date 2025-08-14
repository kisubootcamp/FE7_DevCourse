// 문제 1: 자동차 객체 만들기
// 자동차 객체를 생성하는 `Car` 생성자 함수를 만드세요. 자동차는 `make`, `model`, `year` 속성을 가지며, `drive` 메서드를 통해 자동차의 모델과 제조사를 출력합니다.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function () {
        console.log(`${this.make}, ${this.model}`);
    }
}

// 문제 2: 학생 객체 만들기
// 학생 객체를 생성하는 `Student` 생성자 함수를 만드세요. 학생은 `name`, `grade` 속성을 가지며, `getInfo` 메서드를 통해 학생 정보를 출력합니다.
function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.getInfo = function () {
        console.log(`${this.name}, ${this.grade}`);
    }
}


// 문제 3: 동물 객체 만들기
// `Animal` 생성자 함수를 만들어서, 동물의 이름과 종류를 속성으로 갖고, `speak` 메서드를 통해 소리를 내는 기능을 추가하세요.
function Animal(name, type) {
    this.anmialName = name;
    this.anmialType = type;
    this.speak = function() {
        console.log("크아앙");
    }
}


// ## 문제 4: 도서 객체 만들기
// `Book` 생성자 함수를 만들어서, 책의 제목, 저자, 출판 연도를 속성으로 갖고, `getSummary` 메서드를 통해 책의 요약 정보를 출력하세요.
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        console.log(`${this.tile}, ${this.author}, ${this.year}`);
    }
}


// ## 문제 5: 은행 계좌 객체 만들기
// `BankAccount` 생성자 함수를 만들어서, 계좌의 초기 잔고를 설정하고, `deposit`, `withdraw`, `getBalance` 메서드를 구현하세요.
function BankAccount() {
    this.amount = 0;
    this.deposit = function(money) {
        this.amount += money;
    }
    this.withdraw = function() {
        this.amount -= money;
    }
    this.getBalance = function() {
        return this.amount;
    }
}


// ## 문제 6: 사각형 객체 만들기
// `Rectangle` 생성자 함수를 만들어서, 가로와 세로 길이를 속성으로 갖고, `area`와 `perimeter` 메서드를 통해 면적과 둘레를 계산하세요.
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width * this.height;
    }
    this.perimeter = function () {
        return 2 * (this.width + this.height);
    }
}

// ## 문제 7: 비행기 객체 만들기
// `Airplane` 생성자 함수를 만들어서, 비행기의 `model`, `capacity`, `fly` 메서드를 구현하여 비행기가 비행하는 정보를 출력하세요.
function Airplane(model, capacity) {
    this.model = model;
    this.capacity = capacity;
    this.fly = function () {
        console.log(`${this.model}, ${this.capacity}`);
    }
}


// ## 문제 8: 팀 객체 만들기
// `Team` 생성자 함수를 만들어서, 팀의 `name`과 `members` 속성을 갖고, `addMember` 메서드를 통해 팀원 추가 기능을 구현하세요.
function Team(name, members) {
    this.name = name;
    this.members = members;
    this.addMember = function(member) {
        this.members.push(member);
    }
}

// ## 문제 9: 영화 객체 만들기
// `Movie` 생성자 함수를 만들어서, 영화의 `title`, `director`, `year` 속성을 갖고, `getDetails` 메서드를 통해 영화 정보를 출력하세요.
function Movie(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.getDetails = function() {
        console.log(`${this.title}, ${this.director}, ${this.year}`);
    }
}



// ## 문제 10: 시간 객체 만들기
// `Time` 생성자 함수를 만들어서, 시간을 시, 분, 초로 설정하고, `getTime` 메서드를 통해 시간을 출력하세요.
function Time(hour, minute, second) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.getTime = function() {
        console.log(`현재 시각: ${this.hour}시 ${this.minute}분 ${this.second}초`);
    }
}
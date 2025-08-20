// 1. 자동차 객체 만들기
// 자동차 객체를 생성하는 `Car` 생성자 함수를 만드세요. 자동차는 `make`, `model`, `year` 속성을 가지며, `drive` 메서드를 통해 자동차의 모델과 제조사를 출력합니다.
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = this.year;
    this.drive = function () {
        return `${this.make}, ${this.model}, ${this.year}}`;
    }
}
const car = new Car("현대", "제네시스", 2025);
console.log(car.drive());


// 2. 학생 객체 만들기
// 학생 객체를 생성하는 `Student` 생성자 함수를 만드세요. 학생은 `name`, `grade` 속성을 가지며, `getInfo` 메서드를 통해 학생 정보를 출력합니다.
function Student(name, grade) {
    this.name = name;
    this.grade = grade;
    this.getInfo = function () {
        return `${this.name}, ${this.grade}`;
    }
}
const student1 = new Student("kim", 100);
console.log(student1);


// 3. 동물 객체 만들기
// `Animal` 생성자 함수를 만들어서, 동물의 이름과 종류를 속성으로 갖고, `speak` 메서드를 통해 소리를 내는 기능을 추가하세요.
function Animal(name, type) {
    this.name = name;
    this.type = type;
    this.speak = function() {
        return `${this.name}가 소리를 냅니다`;
    }
}
const animal1 = new Animal("곰이", "고양이");
console.log(animal1);


// 4. 도서 객체 만들기
// `Book` 생성자 함수를 만들어서, 책의 제목, 저자, 출판 연도를 속성으로 갖고, `getSummary` 메서드를 통해 책의 요약 정보를 출력하세요.
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title}, ${this.author}, ${this.year}`;
    }
}

const book1 = new Book("코딩 자율 학습 리액트", "김기수", 2025);
console.log(book1);


// 5. 은행 계좌 객체 만들기
// `BankAccount` 생성자 함수를 만들어서, 계좌의 초기 잔고를 설정하고, `deposit`, `withdraw`, `getBalance` 메서드를 구현하세요.
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
    }
}

const bank = new BankAccount(0);
bank.deposit(1000);
console.log(bank.getBalance());
bank.withdraw(500);
console.log(bank.getBalance());

// 6. 사각형 객체 만들기
// `Rectangle` 생성자 함수를 만들어서, 가로와 세로 길이를 속성으로 갖고, `area`와 `perimeter` 메서드를 통해 면적과 둘레를 계산하세요.
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
const rect = new Rectangle(10, 20);
console.log(rect);

// 7. 비행기 객체 만들기
// `Airplane` 생성자 함수를 만들어서, 비행기의 `model`, `capacity`, `fly` 메서드를 구현하여 비행기가 비행하는 정보를 출력하세요.
function Airplane(model, capcity) {
    this.model = model;
    this.capcity = capacity;
    this.fly = function () {
        return `${this.model}, ${this.capacity}`;
    };
}
const air = new Airplane("대한항공", 400);
console.log(air);


// 8. 팀 객체 만들기
// `Team` 생성자 함수를 만들어서, 팀의 `name`과 `members` 속성을 갖고, `addMember` 메서드를 통해 팀원 추가 기능을 구현하세요.
function Team(name, members) {
    this.name = this.name;
    this.memebers = this.memebers;
    this.addMember = function(memberName) {
        this.members.push(memberName);
    }
}
const lol = new Team("SKT T1");
lol.addMember("faker");
lol.addMember("doran");
lol.addMember("gamusi");
console.log(lol);

// 9. 영화 객체 만들기
// `Movie` 생성자 함수를 만들어서, 영화의 `title`, `director`, `year` 속성을 갖고, `getDetails` 메서드를 통해 영화 정보를 출력하세요.
function Movie(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.getDetails = function () {
        reutrn `${this.title}, ${this.director}, ${this.year}`;
    };
}

const movie = new Movie("슈퍼맨", "모름", 2025);
console.log(movie);


// 10. 시간 객체 만들기
// `Time` 생성자 함수를 만들어서, 시간을 시, 분, 초로 설정하고, `getTime` 메서드를 통해 시간을 출력하세요.
function Time(hour, minute, second) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.getTime = function () {
        return `${this.hour}:${this.minute}:${this.second}`;
    }
}
const time1 = new Time(12, 15, 0);
console.log(time1.getTime());
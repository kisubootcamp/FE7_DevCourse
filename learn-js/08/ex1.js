/* 문제: 자동차 객체를 생성하는 Car 생성자 함수를 만드세요. 자동차는 make, model, year 속성을 가지며, drive 메서드를 통해 자동차의 모델과 제조사를 출력합니다. */
function Car(model, year) {
	this.model = this.model;
	this.year = this.year;
	this.drive = function () {
		return `This Car model is ${this.model}, ${this.year}.`;
	};
}
const myCar = new Car("kia", "sorento", "2025");
console.log(myCar.drive());

/* 문제: 학생 객체를 생성하는 Student 생성자 함수를 만드세요. 학생은 name, grade 속성을 가지며, getInfo 메서드를 통해 학생 정보를 출력합니다. */
function Student(name, grade) {
	this.name = name;
	this.grade = grade;
	this.getInfo = function () {
		return `This student's name is ${this.name}, in the ${this.grade} grade.`;
	};
}
const iAm = new Student("Park Sang A", "2st");
console.log(iAm.getInfo());

/* 문제 `Animal` 생성자 함수를 만들어서, 동물의 이름과 종류를 속성으로 갖고, `speak` 메서드를 통해 소리를 내는 기능을 추가하세요. */
function Animal(name, type) {
	this.name = name;
	this.type = type;
	this.speak = function () {
		return `${this.name} / ${this.type} 曰 멍멍`;
	};
}
const dog = new Animal("콩순이", "개");
console.log(dog.speak());

/* 문제: Book 생성자 함수를 만들어서, 책의 제목, 저자, 출판 연도를 속성으로 갖고, getSummary 메서드를 통해 책의 요약 정보를 출력하세요. */
function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.pulicationYear = year;
	this.getSummary = function () {
		return `이 책의 제목은 ${this.title}`;
	};
}
const myBook = new Animal("나는 상아다", "상아", 2025);
console.log();

/* 문제: BankAccount 생성자 함수를 만들어서, 계좌의 초기 잔고를 설정하고, deposit, withdraw, getBalance 메서드를 구현하세요. */
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
const myBank = new BankAccount(0);
BankAccount.deposit;

/* 문제: Rectangle 생성자 함수를 만들어서, 가로와 세로 길이를 속성으로 갖고, area와 perimeter 메서드를 통해 면적과 둘레를 계산하세요. */
function Rectangle(width, height) {
	this.width = width;
	this.height = height;
	this.area = () => this.width * this.height;
	this.perimeter = () => (this.width + this.height) * 2;
}
const myRect = new Rectangle(20, 10);
console.log(myRect.area());
console.log(myRect.perimeter());

/* 문제: Airplane 생성자 함수를 만들어서, 비행기의 model, capacity, fly 메서드를 구현하여 비행기가 비행하는 정보를 출력하세요. */
function Airplane(model, capacity) {
	this.model = model;
	this.capacity = capacity;
	this.fly = () =>
		`This airplane's model is ${this.model} and its capacity is ${this.grade}.`;
}

/* 문제: Team 생성자 함수를 만들어서, 팀의 name과 members 속성을 갖고, addMember 메서드를 통해 팀원 추가 기능을 구현하세요. */
function Team(name, members) {
	this.name = name;
	this.members = members;
	this.addMember = function (member) {
		this.members.push(member);
		return member;
	};
}
const izFour = new Team("IZ*FOUR", []);
izFour.addMember("송영주");
izFour.addMember("박상아");
izFour.addMember("권나래");
izFour.addMember("정민경");
console.log(isFour);

/*  문제: Movie 생성자 함수를 만들어서, 영화의 title, director, year 속성을 갖고, getDetails 메서드를 통해 영화 정보를 출력하세요. */
function Movie(title, director, year) {
	this.title = title;
	this.director = director;
	this.year = year;
	this.getDetails = () =>
		`The title of this movie is ${this.title}, it was released in ${this.year}, and the director is ${this.director}.`;
}
const movie = new Movie("기생충", "봉준호", "2021");
console.log(movie);

/* 문제: Time 생성자 함수를 만들어서, 시간을 시, 분, 초로 설정하고, getTime 메서드를 통해 시간을 출력하세요. */
function Time(h, m, s) {
	this.hour = h;
	this.minute = m;
	this.second = s;
	this.getTime = () => {
		let time = h < 12 ? "AM" : "PM";
		return `The current time is ${this.hour}:${this.minute}:${this.second} ${this.time}.`;
	};
}
const time = new Time(11, 30, 25);
console.log(time);
console.log(time.getTime());

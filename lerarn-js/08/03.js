// 1.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = () => `${this.make}, ${this.model}, ${this.year}`;
}

// const car = new Car("현대", "제네시스", 2025);
// console.log(car.drive());

// 2.
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = () => `name: ${this.name}, grade: ${this.grade}`;
}

// 3.
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = () => `${this.name}가 소리를 냅니다.`;
}

// 4.
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = () =>
    console.log(`title: ${title}, author: ${author}, year: ${year}`);
}

// 5.
function BankAccount(initialBalance) {
  this.balance = initialBalance;
  this.deposit = (amount) => (this.balance += amount);
  this.withdraw = (amount) => (this.balance -= amount);
  this.getBalance = () => this.balance;
}

// 6.
function Rectangle(width, length) {
  this.width = width;
  this.length = length;

  this.area = () => console.log(`area: ${this.width * this.length}`);
  this.perimeter = () =>
    console.log(`perimeter: ${2 * (this.width + this.length)}`);
}

// 7.
function Airplane(model, capacity, fly = "WoooooO~") {
  this.model = model;
  this.capacity = capacity;
  this.fly = () => `${this.model}, ${this.capacity}`;
}

// 8.
function Team(name, members) {
  this.name = name;
  this.members = members;
  this.addMember = (newMember) => {
    this.members.push(newMember);
    console.log(`${newMember}가 팀에 들어왔습니다.`);
  };
}

// 9.
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = () => {
    console.log(`제목: ${title}, 감독: ${director}, 발매연도: ${year}`);
  };
}

// 10.
function Time(hour, minute, second) {
  this.hour = hour;
  this.minute = minute;
  this.second = second;
  this.getTime = () =>
    console.log(
      `현재 시각은 ${this.hour}시, ${this.minute}분, ${this.second}초 입니다.`
    );
}

// 1.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = () => console.log(`model: ${model}, make: ${make}`);
}

// 2.
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = () => console.log(`name: ${name}, grade: ${grade}`);
}

// 3.
function Animal(name, species) {
  this.name = name;
  this.species = species;
  this.speak = () => console.log("멍멍");
}

// 4.
function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
  this.getSummary = () =>
    console.log(`name: ${name}, author: ${author}, year: ${year}`);
}

// 5.
function BankAccount(initialBalance) {
  this.money = initialBalance;

  this.deposit = (amount) => {
    this.money += amount;
    console.log(`입금: ${amount}원`);
  };
  this.withdraw = (amount) => {
    this.money -= amount;
    console.log(`출금: ${amount}원`);
  };
  this.getBalance = () => {
    console.log(`남은 잔액: ${this.money}`);
  };
}

// 6.
function Rectangle(width, length) {
  this.width = width;
  this.length = length;

  this.area = () => console.log(`area: ${width * length}`);
  this.perimeter = () =>
    console.log(`perimeter: ${this.width * 2 + this.length * 2}`);
}

// 7.
function Airplane(model, capacity, fly = "WoooooO~") {
  this.model = model;
  this.capacity = capacity;
  this.fly = fly;
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

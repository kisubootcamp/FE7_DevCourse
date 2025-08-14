//Q1
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.drive = function () {
    console.log(this.model, this.make);
  };
}

const bmw = new Car("bmw", "a", 2025);
bmw.drive();

//Q2
function Student(name, grade) {
  this.name = name;
  this.grade = grade;

  this.getInfo = function () {
    console.log(this.grade, this.name);
  };
}

const jiho = new Student("jiho", 6);
jiho.getInfo();

//Q3
function Animal(name, type) {
  this.name = name;
  this.type = type;

  this.speak = function () {
    if (this.type === "cat") console.log("meow");
    else if (this.type === "dog") console.log("bow");
    else console.log("안녕하세요");
  };
}

const cat = new Animal("nabi", "cat");
const dog = new Animal("baduk", "dog");
const human = new Animal("jiho", "human");
cat.speak();
dog.speak();
human.speak();

//Q4
function Book(name, writer, year) {
  this.name = name;
  this.writer = writer;
  this.year = year;

  this.getSummary = function () {
    return [this.name, this.writer, this.year];
  };
}
const myBook = new Book("a", "b", 2025);
console.log(myBook.getSummary());

// Q5
function BankAccount() {
  this.money = 0;

  this.deposit = function (addMoney) {
    this.money += addMoney;
  };
  this.withdraw = function (subMoney) {
    this.money -= subMoney;
  };
  this.getBalance = function () {
    return this.money;
  };
}
const jihoBank = new BankAccount();
jihoBank.deposit(100);
jihoBank.withdraw(20);
console.log(jihoBank.getBalance());

// Q6
function Rectangle(width, length) {
  this.width = width;
  this.length = length;

  this.area = function () {
    return this.width * this.length;
  };
  this.perimeter = function () {
    return this.width * 2 + this.length * 2;
  };
}

const square = new Rectangle(10, 5);
console.log(square.area());
console.log(square.perimeter());

//Q7
function AirPlane() {
  this.model = function () {};
  this.capacity = function () {};
  this.fly = function () {
    console.log("슝");
  };
}
const koreanAir = new AirPlane();
koreanAir.fly();

//Q8
function Team(name, members) {
  this.name = name;
  this.members = members;
  this.addMember = function (newMember) {
    this.members.push(newMember);
  };
}

const bayern = new Team("Bayern", ["musiala"]);
bayern.addMember("minjae");
console.log(bayern.members);

//Q9
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;

  this.getDetails = function () {
    return [this.title, this.director, this.year];
  };
}

const a = new Movie("a", "b", 1999);
console.log(a.getDetails());

//Q10
function Time(o, m, s) {
  this.o = o;
  this.m = m;
  this.s = s;
  this.getTime = () => `${this.o} : ${this.m} : ${this.s}`;
}

const now = new Time(12, 30, 0);
console.log(now.getTime());

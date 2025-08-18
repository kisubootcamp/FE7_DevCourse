// 연습 문제 1
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    console.log(`Driving a ${this.year} ${this.make} ${this.model}`);
  };
}

new Car("Toyota", "Camry", 2020).drive(); // Driving a 2020 Toyota Camry
new Car("Honda", "Civic", 2021).drive(); // Driving a 2021 Honda Civic
new Car("Ford", "Mustang", 2022).drive(); // Driving a 2022 Ford Mustang

//

// 연습 문제 2
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
  this.getInfo = function () {
    console.log(`${this.name} is in grade ${this.grade}`);
  };
}

new Student("Alice", 10).getInfo(); // Alice is in grade 10
new Student("Bob", 11).getInfo(); // Bob is in grade 11

//

// 연습 문제 3
function Animal(name, type) {
  this.name = name;
  this.type = type;
  this.speak = function () {
    console.log(`${this.name} the ${this.type} makes a sound.`);
  };
}

new Animal("Leo", "lion").speak(); // Leo the lion makes a sound.
new Animal("Mittens", "cat").speak(); // Mittens the cat makes a sound.

//

// 연습 문제 4
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    console.log(`${this.title} by ${this.author}, published in ${this.year}`);
  };
}

new Book("1984", "George Orwell", 1949).getSummary(); // 1984 by George Orwell, published in 1949
new Book("To Kill a Mockingbird", "Harper Lee", 1960).getSummary(); // To Kill a Mockingbird by Harper Lee, published in 1960

//

// 연습 문제 5
function BankAccount(balance) {
  this.balance = balance || 0;

  this.deposit = function (amount) {
    balance += amount;
    console.log(`Deposited: $${amount}. New balance: $${balance}`);
  };

  this.withdraw = function (amount) {
    if (amount > balance) {
      console.log("Insufficient funds");
    } else {
      balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${balance}`);
    }
  };

  this.getBalance = function () {
    console.log(`Current balance: $${balance}`);
  };
}

const account = new BankAccount(100);
account.deposit(50); // Deposited: $50. New balance: $150
account.withdraw(30); // Withdrew: $30. New balance: $120

//

// 연습 문제 6
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
  this.perimeter = function () {
    return 2 * (this.width + this.height);
  };
  this.getInfo = function () {
    console.log(
      `Rectangle: width=${this.width}, height=${
        this.height
      }, area=${this.area()}, perimeter=${this.perimeter()}`
    );
  };
}

const rect1 = new Rectangle(5, 10);
const rect2 = new Rectangle(3, 4);
rect1.getInfo(); // Rectangle: width=5, height=10, area=50, perimeter=30
rect2.getInfo(); // Rectangle: width=3, height=4, area=12, perimeter=14

//

// 연습 문제 7
function Airplane(model, capacity, fly) {
  this.model = model;
  this.capacity = capacity;
  this.fly = function () {
    console.log(`${this.model} is flying with a capacity of ${this.capacity}`);
  };
}

const airplane1 = new Airplane("Boeing 747", 660);
const airplane2 = new Airplane("Airbus A380", 850);
airplane1.fly(); // Boeing 747 is flying with a capacity of 660
airplane2.fly(); // Airbus A380 is flying with a capacity of 850

//

// 연습 문제 8
function Team(name, members) {
  this.name = name;
  this.members = members || [];
  this.addMember = function (member) {
    this.members.push(member);
    console.log(`${member} has been added to the team ${this.name}`);
  };
}

const team1 = new Team("Red Team");
const team2 = new Team("Blue Team");
team1.addMember("Alice"); // Alice has been added to the team Red Team
team1.addMember("Bob"); // Bob has been added to the team Red Team

//

// 연습 문제 9
function Movie(title, director, year) {
  this.title = title;
  this.director = director;
  this.year = year;
  this.getDetails = function () {
    console.log(
      `${this.title} directed by ${this.director}, released in ${this.year}`
    );
  };
}

const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
const movie2 = new Movie("The Matrix", "Lana Wachowski", 1999);
movie1.getDetails(); // Inception directed by Christopher Nolan, released in 2010
movie2.getDetails(); // The Matrix directed by Lana Wachowski, released in 1999

//

// 연습 문제 10
function Time(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
  this.getTime = function () {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  };
}
const time1 = new Time(10, 30, 45);
const time2 = new Time(5, 15, 0);
console.log(time1.getTime()); // 10:30:45
console.log(time2.getTime()); // 5:15:0

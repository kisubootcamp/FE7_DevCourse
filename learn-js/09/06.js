// ### 문제 1

// **문제 설명:** `Vehicle` 생성자 함수를 만들고, 속성으로 `speed`를 받으며, `accelerate` 메서드를 프로토타입에 추가하여 속도를 증가시키는 기능을 구현하세요.

// **기본 제공 코드:**

function Vehicle(speed) {
  this.speed = speed;
}

Vehicle.prototype.accelerate = function (s) {
  this.speed += s;
};

const car = new Vehicle(0);
car.accelerate(10);
console.log(car.speed); // 10

// ### 문제 2

// **문제 설명:** `Shape` 생성자 함수에 `getArea` 메서드를 추가하되, 이를 추상 메서드처럼 만들고, `Circle`과 `Rectangle` 생성자에서 이를 오버라이드하여 각각의 면적을 계산하세요.

// **기본 제공 코드:**

function Shape() {}

Shape.prototype.getArea = function () {
  throw new Error("getArea() must be implemented");
};

function Circle(radius) {
  this.radius = radius;
}

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
  return this.radius * this.radius * 3.14;
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.getArea()); // 78.54
console.log(rectangle.getArea()); // 24

// ### 문제 3

// **문제 설명:** `Person` 생성자 함수를 만들고, 모든 인스턴스에서 `fullName` 프로퍼티를 통해 "First Last" 형식으로 이름을 반환하는 메서드를 프로토타입에 추가하세요.

// **기본 제공 코드:**

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person = new Person("John", "Doe");
console.log(person.fullName()); // "John Doe"

// ### 문제 4

// **문제 설명:** `BankAccount` 생성자 함수를 만들고, `balance` 속성과 `deposit`, `withdraw` 메서드를 프로토타입에 추가하여 입금 및 출금 기능을 구현하세요.

// **기본 제공 코드:**

function BankAccount(initialBalance) {
  this.balance = initialBalance;
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120

// ### 문제 5

// **문제 설명:** `Employee` 생성자 함수를 만들고, `getSalary` 메서드를 프로토타입에 추가하여 직원의 월급을 계산하는 기능을 구현하세요. 기본 월급과 보너스를 받아야 합니다.

// **기본 제공 코드:**

function Employee(baseSalary, bonus) {
  this.baseSalary = baseSalary;
  this.bonus = bonus;
}

Employee.prototype.getSalary = function (amount) {
  return this.baseSalary + this.bonus;
};

const employee = new Employee(3000, 500);
console.log(employee.getSalary()); // 3500

// ### 문제 6

// **문제 설명:** `Library` 생성자 함수를 만들고, 책을 추가하는 `addBook` 메서드와 전체 책 목록을 출력하는 `listBooks` 메서드를 프로토타입에 추가하세요.

// **기본 제공 코드:**

function Library() {
  this.books = [];
}

Library.prototype.addBook = function (name) {
  this.books.push(name);
};

Library.prototype.listBooks = function (amount) {
  return this.books;
};

const library = new Library();
library.addBook("1984");
library.addBook("Brave New World");
console.log(library.listBooks()); // ["1984", "Brave New World"]

// ### 문제 7

// **문제 설명:** `Calculator` 생성자 함수를 만들고, 덧셈, 뺄셈, 곱셈, 나눗셈 메서드를 프로토타입에 추가하여 기본 계산 기능을 구현하세요.

// **기본 제공 코드:**

function Calculator() {}

Calculator.prototype.add = function (num1, num2) {
  return num1 + num2;
};

Calculator.prototype.subtract = function (num1, num2) {
  return num1 - num2;
};

Calculator.prototype.multiply = function (num1, num2) {
  return num1 * num2;
};

Calculator.prototype.divide = function (num1, num2) {
  if (num2 === 0) return `Cannot divide by zero`;
  return num1 / num2;
};

// 여기에 add, subtract, multiply, divide 메서드를 추가하세요.

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 0)); // "Cannot divide by zero"

// ### 문제 8

// **문제 설명:** `Person` 생성자 함수에 `isAdult` 메서드를 추가하여, 나이가 18세 이상일 경우 `true`를 반환하고, 그렇지 않으면 `false`를 반환하도록 하세요.

// **기본 제공 코드:**

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.isAdult = function () {
  if (this.age >= 18) return true;
  else return false;
};

const john = new Person("John", 20);
console.log(john.isAdult()); // true
const alice = new Person("Alice", 16);
console.log(alice.isAdult()); // false

// ### 문제 9

// **문제 설명:** `Stack` 생성자 함수를 만들고, 스택에 항목을 추가하고 제거하는 `push`와 `pop` 메서드를 프로토타입에 추가하세요. 스택이 비어있을 경우 적절한 메시지를 출력하도록 하세요.

// **기본 제공 코드:**

function Stack() {
  this.items = [];
}

Stack.prototype.push = function (i) {
  this.items.push(i);
};
Stack.prototype.pop = function () {
  if (!this.items) return `Stack is empty`;
  return this.items.pop();
};

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // "Stack is empty"

// ### 문제 10

// **문제 설명:** `Person` 생성자 함수에 `friends` 배열을 추가하고, 친구를 추가하는 `addFriend` 메서드와 친구 목록을 출력하는 `listFriends` 메서드를 프로토타입에 추가하세요.

// **기본 제공 코드:**

function Person(name) {
  this.name = name;
  this.friends = [];
}

Person.prototype.addFriend = function (name) {
  this.friends.push(name);
};
Person.prototype.listFriends = function () {
  return this.friends;
};

const john2 = new Person("John");
john.addFriend("Alice");
john.addFriend("Bob");
console.log(john.listFriends()); // ["Alice", "Bob"]

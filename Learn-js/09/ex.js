// 프로토타입 - 연습문제
// 1. Person 생성자 함수를 작성하고, greet 메서드를 프로토타입에 추가하세요.
// 이 메서드는 "Hello, my name is [name]"을 출력해야 합니다.
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet();

// 2. Car 생성자 함수를 작성하고, start 메서드를 프로토타입에 추가하여
// "The car has started."를 출력하도록 하세요.
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  return console.log("The car has started.");
};

const myCar = new Car("Toyota");
myCar.start();

// 3. Rectangle 생성자 함수를 만들고, 면적을 계산하는 area 메서드를 프로토타입에 추가하세요.
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.area = function () {
  return this.width * this.height;
};

const rect = new Rectangle(5, 10);
console.log(rect.area());

// 4. Animal 생성자 함수를 만들고, speak 메서드를 프로토타입에 추가하여
// "Animal makes a sound"를 출력하도록 하세요.
function Animal() {}

// 여기에 speak 메서드를 추가하세요.
Animal.prototype.speak = function () {
  return console.log("Animal makes a sound");
};

const animal = new Animal();
animal.speak();

// 5. Dog 생성자 함수를 만들고, speak 메서드를 오버라이드하여 "Woof!"를 출력하도록 하세요.
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  console.log("Animal makes a sound");
};

// 여기에 Dog의 speak 메서드를 수정하세요.
Dog.prototype.speak = function () {
  console.log("Woof!");
};

const dog = new Dog("Buddy");
dog.speak();

// 6. Student 생성자 함수를 만들고, introduce 메서드를 프로토타입에 추가하여 "Hi, I'm [name] and I'm a student."를 출력하도록 하세요.
function Student(name) {
  this.name = name;
}

// 여기에 introduce 메서드를 추가하세요.
Student.prototype.introduce = function () {
  return console.log(`Hi, I'm ${this.name} and I'm a student.`);
};

const student = new Student("Alice");
student.introduce();

// 7. Book 생성자 함수를 만들고, getSummary 메서드를 프로토타입에 추가하여 "Title: [title], Author: [author]"를 출력하도록 하세요.
function Book(title, author) {
  this.title = title;
  this.author = author;
}

// 여기에 getSummary 메서드를 추가하세요.
Book.prototype.getSummary = function () {
  return `Title: [${this.title}], Author: [${this.author}]`;
};

const book = new Book("1984", "George Orwell");
console.log(book.getSummary());

// 8. Shape 생성자 함수를 만들고, getType 메서드를 프로토타입에 추가하여 "I am a shape."를 출력하도록 하세요.
function Shape() {}

// 여기에 getType 메서드를 추가하세요.
Shape.prototype.getType = function () {
  return console.log("I am a shape.");
};

const shape = new Shape();
shape.getType();

// 9. Circle 생성자 함수를 만들고, getCircumference 메서드를 프로토타입에 추가하여 원의 둘레를 계산하는 기능을 구현하세요.
function Circle(radius) {
  this.radius = radius;
}

// 여기에 getCircumference 메서드를 추가하세요.
Circle.prototype.getCircumference = function () {
  return `${(this.radius + 2) * Math.PI}`;
};

const circle = new Circle(5);
console.log(circle.getCircumference());

// 10. Employee 생성자 함수를 만들고, getDetails 메서드를 프로토타입에 추가하여
// "Name: [name], Position: [position]"을 출력하도록 하세요.
function Employee(name, position) {
  this.name = name;
  this.position = position;
}

// 여기에 getDetails 메서드를 추가하세요.
Employee.prototype.getDetails = function () {
  return `Name: [${this.name}], Position: [${this.position}]`;
};

const employee = new Employee("Bob", "Developer");
console.log(employee.getDetails());

// ------------------------------------------------------------------------------------
// 프로토타입 - 연습문제+
// 1. Vehicle 생성자 함수를 만들고, 속성으로 speed를 받으며,
// accelerate 메서드를 프로토타입에 추가하여 속도를 증가시키는 기능을 구현하세요.
function Vehicle(speed) {
  this.speed = speed;
}

// 여기에 accelerate 메서드를 추가하세요.
Vehicle.prototype.accelerate = function (accel) {
  this.speed += accel;
};

const car = new Vehicle(0);
car.accelerate(30);
console.log(car.speed); // 30
car.accelerate(10);
console.log(car.speed); // 40

// 2. Shape 생성자 함수에 getArea 메서드를 추가하되, 이를 추상 메서드처럼 만들고,
// Circle과 Rectangle 생성자에서 이를 오버라이드하여 각각의 면적을 계산하세요.
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

// 여기에 Circle과 Rectangle의 getArea 메서드를 추가하세요.
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function () {
  return /* Math.PI */ 3.141592 * this.radius ** 2;
};

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

const circle2 = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle2.getArea()); // 78.54
console.log(rectangle.getArea()); // 24

// 3. Person 생성자 함수를 만들고, 모든 인스턴스에서 fullName 프로퍼티를 통해 "First Last" 형식으로 이름을 반환하는 메서드를 프로토타입에 추가하세요.
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// 여기에 fullName 메서드를 추가하세요.
Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const person = new Person("John", "Doe");
console.log(person.fullName()); // "John Doe"

// 4. BankAccount 생성자 함수를 만들고, balance 속성과 deposit, withdraw 메서드를 프로토타입에 추가하여 입금 및 출금 기능을 구현하세요.
function BankAccount(initialBalance) {
  this.balance = initialBalance;
}

// 여기에 deposit 및 withdraw 메서드를 추가하세요.
BankAccount.prototype.deposit = function (amount) {
  if (amount > 0) {
    this.balance += amount;
    return `${amount}원이 입금되었습니다.`;
  } else {
    return `입금 금액은 0원보다 커야 합니다.`;
  }
};
BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    return `잔액이 부족합니다.`;
  } else if (amount > 0) {
    this.balance -= amount;
    return `${amount}원이 출금되었습니다.`;
  } else {
    return `출금 금액은 0원보다 커야 합니다.`;
  }
};

const account = new BankAccount(100);
account.deposit(50);
console.log(account.balance); // 150
account.withdraw(30);
console.log(account.balance); // 120

// 5. Employee 생성자 함수를 만들고, getSalary 메서드를 프로토타입에 추가하여 직원의 월급을 계산하는 기능을 구현하세요.
// 기본 월급과 보너스를 받아야 합니다.
function Employee(baseSalary, bonus) {
  this.baseSalary = baseSalary;
  this.bonus = bonus;
}

// 여기에 getSalary 메서드를 추가하세요.
Employee.prototype.getSalary = function () {
  return `${this.baseSalary + this.bonus}`;
};

const employee2 = new Employee(3000, 500);
console.log(employee2.getSalary()); // 3500

// 6. Library 생성자 함수를 만들고, 책을 추가하는 addBook 메서드와 전체 책 목록을 출력하는 listBooks 메서드를 프로토타입에 추가하세요.
function Library() {
  this.books = [];
}

// 여기에 addBook 및 listBooks 메서드를 추가하세요.
Library.prototype.addBook = function (title) {
  this.books.push(title);
};
Library.prototype.listBooks = function () {
  return this.books;
};

const library = new Library();
library.addBook("1984");
library.addBook("Brave New World");
console.log(library.listBooks()); // ["1984", "Brave New World"]

// 7. Calculator 생성자 함수를 만들고, 덧셈, 뺄셈, 곱셈, 나눗셈 메서드를 프로토타입에 추가하여 기본 계산 기능을 구현하세요.
function Calculator() {}

// 여기에 add, subtract, multiply, divide 메서드를 추가하세요.
Calculator.prototype.add = function (num1, num2) {
  return `${num1 + num2}`;
};
Calculator.prototype.subtract = function (num1, num2) {
  return `${num1 - num2}`;
};
Calculator.prototype.multiply = function (num1, num2) {
  return `${num1 * num2}`;
};
Calculator.prototype.divide = function (num1, num2) {
  if (num1 === 0 || num2 === 0) return "Cannot divide by zero";
  return `${num1 / num2}`;
};

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // 2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 0)); // "Cannot divide by zero"

// 8. Person 생성자 함수에 isAdult 메서드를 추가하여, 나이가 18세 이상일 경우 true를 반환하고, 그렇지 않으면 false를 반환하도록 하세요.
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 여기에 isAdult 메서드를 추가하세요.
Person.prototype.isAdult = function () {
  return this.age >= 18;
};

const john2 = new Person("John", 20);
console.log(john2.isAdult()); // true
const alice = new Person("Alice", 16);
console.log(alice.isAdult()); // false

// 9. Stack 생성자 함수를 만들고, 스택에 항목을 추가하고 제거하는 push와 pop 메서드를 프로토타입에 추가하세요.
// 스택이 비어있을 경우 적절한 메시지를 출력하도록 하세요.
function Stack() {
  this.items = [];
}

// 여기에 push 및 pop 메서드를 추가하세요.
Stack.prototype.push = function (num) {
  this.items.push(num);
};
Stack.prototype.pop = function () {
  let result = this.items.pop();
  if (result === undefined) return "Stack is empty";
  return result;
};

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1
console.log(stack.pop()); // "Stack is empty"

// 10. Person 생성자 함수에 friends 배열을 추가하고, 친구를 추가하는 addFriend 메서드와 친구 목록을 출력하는 listFriends 메서드를 프로토타입에 추가하세요.
function Person(name) {
  this.name = name;
  this.friends = [];
}

// 여기에 addFriend 및 listFriends 메서드를 추가하세요.
Person.prototype.addFriend = function (uname) {
  this.friends.push(uname);
};
Person.prototype.listFriends = function () {
  return this.friends;
};

const john3 = new Person("John");
john3.addFriend("Alice");
john3.addFriend("Bob");
console.log(john3.listFriends()); // ["Alice", "Bob"]

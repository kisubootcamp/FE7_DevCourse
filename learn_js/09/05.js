// 1. Person 생성자 함수를 작성하고, greet 메서드를 프로토타입에 추가하세요.
// 이 메서드는 "Hello, my name is [name]"을 출력해야 합니다.
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, My name is ${this.name}`);
};

const john = new Person('John');
john.greet();

//  2. Car 생성자 함수를 작성하고, start 메서드를 프로토타입에 추가하여 "The car has started."를 출력하도록 하세요.
function Car(brand) {
  this.brand = brand;
}

Car.prototype.start = function () {
  console.log('The car has started.');
};

const myCar = new Car('Toyota');
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

// 4. Animal 생성자 함수를 만들고, speak 메서드를 프로토타입에 추가하여 "Animal makes a sound"를 출력하도록 하세요.

function Animal() {}

Animal.prototype.speak = function () {
  console.log('Animal makes a sound');
};

const animal = new Animal();
animal.speak();

// 5. Dog 생성자 함수를 만들고, speak 메서드를 오버라이드하여 "Woof!"를 출력하도록 하세요.
function Dog(name) {
  this.name = name;
}

Dog.prototype.speak = function () {
  console.log('Animal makes a sound');
};

Dog.prototype.speak = function () {
  console.log('Woof!');
};

const dog = new Dog('Buddy');
dog.speak();

// 6. Student 생성자 함수를 만들고, introduce 메서드를 프로토타입에 추가하여 "Hi, I'm [name] and I'm a student."를 출력하도록 하세요.
function Student(name) {
  this.name = name;
}

Student.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.name} and I'm a student.`);
};

const student = new Student('Alice');
student.introduce();

// 7. Book 생성자 함수를 만들고, getSummary 메서드를 프로토타입에 추가하여 "Title: [title], Author: [author]"를 출력하도록 하세요.
function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.getSummary = function () {
  console.log(`Title: ${this.title}, Author: ${this.author}`);
};

const book = new Book('1984', 'George Orwell');
console.log(book.getSummary());

// 8. Shape 생성자 함수를 만들고, getType 메서드를 프로토타입에 추가하여 "I am a shape."를 출력하도록 하세요.
function Shape() {}

Shape.prototype.getType = function () {
  console.log('I am a shape.');
};

const shape = new Shape();
shape.getType();

// 9. Circle 생성자 함수를 만들고, getCircumference 메서드를 프로토타입에 추가하여 원의 둘레를 계산하는 기능을 구현하세요.
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getCircumference = function () {
  return 2 * 3.14 * this.radius;
};

const circle = new Circle(5);
console.log(circle.getCircumference());

//. 10 Employee 생성자 함수를 만들고, getDetails 메서드를 프로토타입에 추가하여 "Name: [name], Position: [position]"을 출력하도록 하세요.
function Employee(name, position) {
  this.name = name;
  this.position = position;
}

Employee.prototype.getDetails = function () {
  return `Name: ${this.name}, Position: ${this.position}`;
};

const employee = new Employee('Bob', 'Developer');
console.log(employee.getDetails());

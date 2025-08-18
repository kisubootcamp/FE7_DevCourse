// 1
function Person(name) {
    this.name = name;
}

// 여기에 greet 메서드를 추가하세요.
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet();

// 2
function Car(brand) {
    this.brand = brand;
}

// 여기에 start 메서드를 추가하세요.
Car.prototype.start = function () {
    console.log("The car has started");
}
const myCar = new Car("Toyota"); // {}.Car("Toyota");
myCar.start();

// 3
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

// 여기에 area 메서드를 추가하세요.
Rectangle.prototype.area = function () {
    return this.width * this.height;
}

const rect = new Rectangle(5, 10);
console.log(rect.area());

// 4
function Animal() {}

// 여기에 speak 메서드를 추가하세요.
Animal.prototype.speak = function () {
    console.log(`Animal makes a sound`);
}

const animal = new Animal();
animal.speak();


// 5
function Dog(name) {
    this.name = name;
}

Dog.prototype.speak = function() {
    console.log("Animal makes a sound");
};

// 여기에 Dog의 speak 메서드를 수정하세요.
Dog.prototype.speak = function () {
    console.log("Woof");
};

const dog = new Dog("Buddy");
dog.speak();


// 6
function Student(name) {
    this.name = name;
}

// 여기에 introduce 메서드를 추가하세요.
Student.prototype.introduce = function() {
    console.log(`Hi, I'm ${this.name} and I'm a student`);
}

const student = new Student("Alice");
student.introduce();


// 7
function Book(title, author) {
    this.title = title;
    this.author = author;
}

// 여기에 getSummary 메서드를 추가하세요.
Book.prototype.getSummary = function() {
    return `Title: ${this.title}, Author: ${this.author}`;
}

const book = new Book("1984", "George Orwell");
console.log(book.getSummary());


// 8
function Shape() {}
// 여기에 getType 메서드를 추가하세요.
Shape.prototype.getType = function() {
    console.log("I am a shape");
}
const shape = new Shape();
shape.getType();


// 9
function Circle(radius) {
    this.radius = radius;
}

// 여기에 getCircumference 메서드를 추가하세요.
Circle.prototype.getCircumference = function () {
    return 2 * 3.14 * this.radius;
}
const circle = new Circle(5);
console.log(circle.getCircumference());


// 10
function Employee(name, position) {
    this.name = name;
    this.position = position;
}

// 여기에 getDetails 메서드를 추가하세요.
Employee.prototype.getDetails = function () {
    return `Name: ${this.name}, Position: ${this.position}`;
}

const employee = new Employee("Bob", "Developer");
console.log(employee.getDetails());
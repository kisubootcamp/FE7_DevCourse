//+1
function Vehicle(speed) {
  this.speed = speed;
}

Vehicle.prototype.accelerate = function (amount) {
  this.speed += amount;
};

// 여기에 accelerate 메서드를 추가하세요.

const car = new Vehicle(0);
car.accelerate(10);
console.log(car.speed); // 10

//+2

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

Circle.prototype = Object.create(this, getArea);

// 여기에 Circle과 Rectangle의 getArea 메서드를 추가하세요.

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.getArea()); // 78.54
console.log(rectangle.getArea()); // 24

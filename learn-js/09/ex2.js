// 연습문제 +

//

// 연습 문제 1
// 문제 설명: Vehicle 생성자 함수를 만들고, 속성으로 speed를 받으며,
// accelerate 메서드를 프로토타입에 추가하여 속도를 증가시키는 기능을 구현하세요.
function Vehicle(speed) {
  this.speed = speed;
}

// 여기에 accelerate 메서드를 추가하세요.
Vehicle.prototype.acclerate = function (amount) {
  this.speed += amount;
  // 여기서 this는 Vehicle 인스턴스를 가리킴
};

const car = new Vehicle(0);
car.accelerate(10);
console.log(car.speed); // 10

//

// 연습 문제 2
// 문제 설명: Shape 생성자 함수에 getArea 메서드를 추가하되, 이를 추상 메서드처럼 만들고,
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

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
console.log(circle.getArea()); // 78.54
console.log(rectangle.getArea()); // 24

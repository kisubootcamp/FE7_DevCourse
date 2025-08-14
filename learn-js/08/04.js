function Car(make, model, year) {
  // 멤버 속성
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    return `model ${this.model}, made by ${this.make} in ${this.year}`;
  };
  // 멤버 속성 안에 함수를 안 넣어서 메모리는 아끼면서, 함수가 실행 되도록 할 수 있을까
}
const car1 = new Car("현대", "제네시스", 2025);
const car2 = new Car("현대", "쏘나타", 2025);
const car3 = new Car("현대", "아반떼", 2025);

// dir : 객체의 속성을 게층적으로 출력해주는 메서드
console.log(car1);
console.log(car2);
console.log(car3);

// 2. 프로토타입
// 모든 함수(생성자 함수 포함)는 일대일 매칭되는 공간(객체)(=프로토타입)이 있다

// (1) 증명 :: 개발자 도구 : console.dir(Car) -> "prototype:" 라는 속성이 항상 함수 내부에 존재
// 속성이 프로토타입이라는 객체에 참조(접근)할 수 있게 함, 반대로 프로토타입은 constructor을 통해 함수 참조 가능
// 인스턴스 객체에서 [[Prototype]] 물려받아 함수가 프로토타입에 참조 가능케함 ([[Prototype]]은 항상 constructor를 가리킴(참조))
// 참고 : [[]] 감춰져있다는 의미

// (2) 공통적인 내용은 프로토타입에 넣어둘 수 있음
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// 프로토타입 객체에 넣어둔다 :: 메모리적 이득
Car.prototype.drive = function () {
  return `model ${this.model}, made by ${this.make} in ${this.year}`;
};
Car.prototype.author = "kim"; // 이런 식도 가능
const car4 = new Car("현대", "제네시스", 2025);
console.dir(car4.make); //가능
console.log(car4.drive()); //가능!
// 프로토타입 체인, 프로토타입 체이닝

// 참고 : 화살표 함수는 this랑 사용할 수 없음 (함수 선언문을 쓰자)

// 참고
console.log(car4.__proto__); // [[Prototype]] 접근 가능 / 히든 속성 참조법 / __~__생략가능

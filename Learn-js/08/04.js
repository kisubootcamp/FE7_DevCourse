// 프로토타입
// this -> 화살표 함수 사용x
function Car(make, model, year) {
  // 멤버 속성
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = () => {
    console.log(this);
  };
}
// => 프로토타입 메서드
Car.prototype.drive = function () {
  return `자동차 모델: ${this.model}, 제조사: ${this.make}, 제조년도: ${this.year}`;
};
Car.prototype.author = "kim";

const car1 = new Car("현대", "펠리세이드", 2025);
const car2 = new Car("현대", "아반떼", 2025);
const car3 = new Car("현대", "쏘나타", 2025);

// dir => 객체의 속성을 계층적으로 출력해주는 메소드
console.dir(car1);
console.dir(car2);
console.dir(car3);

console.log(car1.drive()); // 프로토타입 체인, 프로토타입 체이닝 => 객체에 존재하지 않아도
console.log(car1.author);

console.dir(car1.__proto__.author);
console.dir(car1.author);

console.dir(car1.__proto__);
console.dir(car1.__proto__.drive()); // [[Prototype]] this -> Car.prototype(author와 )
console.dir(car1.drive()); // [[Prototype]] this -> car1

// 내 입맛대로 정리
// this는 그 함수 안에 객체를 뜻한다. => 그 주체는 점(.) 왼쪽에 있는 객체
// 함수 밖에 있는 객체에서 값을 불러오면 undefined가 나온다

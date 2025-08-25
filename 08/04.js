// 프로토타입
// this ->
function Car(make, model, year) {
  // 멤버 속성
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    console.log(this.year);
  };
}

// 화살표 함수는 this라는 것을 사용할 수 없게 설계돼 있어 그런것
Car.prototype.author = "kim";
Car.prototype.drive = function () {
  return `${this.make}, ${this.model}, ${this.year}`;
};

const car1 = new Car("현대", "제네시스", 2025); // 이렇게 new로 생성할 때에는 화살표 함수로 this를 할당해도 제대로 작동함
const car = Car("현대", "제네시스", 2025); // 하지만 new를 붙이지 않으면 window를 참조하게 됨.
// 내 생각엔 new를 붙이면 어떤 틀이 생기면서 this가 그 값을 참조하게 되는듯.

// const car2 = new Car("현대", "쏘나타", 2025);
// const car3 = new Car("현대", "아반떼", 2025);

// dir 객체의 속성을 계층적으로 출력해주는 메서드
// console.dir(car1.__proto__); // 프로토타입 체인, 프로토타입 체이닝
console.dir(car1);
car1.drive();

// 프로토타입 : 공통적으로 쓸 수 있게 해주는 공간? 함수와 1대1로 매칭되는 공간

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

// Car 프로토타입에 함수를 추가한 것
Car.prototype.drive = function () {
  //여기서는 화살표 함수 X , 화살표 함수는 this를 사용할 수 없음
  return `${this.make}, ${this.model}, ${this.year}`;
};

const drive1 = new Car("현대", "아반떼", "2022년식");
const drive2 = new Car("현대", "소나타", "2022년식");
const drive3 = new Car("현대", "제네시스", "2022년식");

// dir 객체의 속성을 계층적으로 출력해주는 메서드
console.log(drive1);
console.log(drive2);
console.log(drive3);
console.log(car1.drive()); //프로토타입 체인, 프로토타입 체이닝

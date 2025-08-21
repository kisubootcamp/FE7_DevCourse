// 프로토타입
// 만약 여러 객체들이 생성되어서 drive 함수를 참조한다고 했을때 비효율 적이기 때문에 프로토 타입을 사용함
function Car(make, model, year) {
  // 멤버 속성
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.drive = function () {
  return `모델명 : ${this.model}, 제조사 : ${this.make}`;
};

const car1 = new Car("제네시스", "현대", 2023);
const car2 = new Car("쏘나타", "현대", 2021);
const car3 = new Car("아반떼", "현대", 2022);

// dir 객체의 속성을 계층적으로 출력해주는 매서드
console.dir(car1);
console.dir(car2);
console.dir(car3);

console.log(car1.drive());

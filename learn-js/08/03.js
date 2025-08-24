function Car(make, model, year) {
  // 멤버 속성
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.drive = function () {
  return `${this.make}, ${this.model}, ${this.year}`;
};
// drive는 인스턴스 객체가 전부 공유함 => 인스턴스 객체들이 공통적으로 사용할 수 있는 프로토타입에 존재함

const car1 = new Car("현대", "제네시스", 2025);
const car2 = new Car("현대", "쏘나타", 2025);
const car3 = new Car("현대", "아반떼", 2025);

console.log(car1.drive());

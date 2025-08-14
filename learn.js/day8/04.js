function Car(make, model, year) {
  // 멤버 속성
  this.make = make;
  this.model = model;
  this.year = year;
}

Car.prototype.drive = function () {
  return `${this.model}, ${this.make}, ${this.year}`;
};
const car1 = new Car("Hyundai", "Sonata", 2015);
const car2 = new Car("Kia", "K5", 2020);
const car3 = new Car("Toyota", "Camry", 2018);

// dir 객체의 속성을 계층적으로 출력해주는 메서드
console.dir(car1.make);
console.dir(car2.model);
console.dir(car3.year);
console.dir(car1.drive()); // 프로토타입 체인, 프로토타입 체이닝: 프로토타입 체인을 통해 메서드에 접근하는 것.

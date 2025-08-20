function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    return `${this.make}, ${this.model}, ${this.year}`;
  };
}

const car1 = new Car("현대", "제네시스", 2025);
const car2 = new Car("현대", "쏘나타", 2025);
const car3 = new Car("현대", "아반떼", 2025);

console.dir(car1);
console.dir(car2);
console.dir(car3);

// 인스턴트 객체가 생성될 때 drive라는 멤버속성은 빼버리고
// 메모리 하나만 할당해서 인스턴트들이 공통적으로 사용가능하게 함
// --> 프로토타입

function Car2(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Car2.prototype.drive = function () {
  return `${this.make}, ${this.model}, ${this.year}`;
};
Car2.prototype.author = "kim";
const car4 = new Car2("현대", "아반떼", 2025);
console.dir(car4.__proto__.author);
console.dir(car4.author);

console.dir(car4.__proto__);
console.dir(car4.__proto__.drive());
console.dir(car4.drive());

// 프로토타입 체인, 체이닝

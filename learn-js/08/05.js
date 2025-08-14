function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  Car.prototype.drive = function () {
    console.log(this.model, this.make);
  };
}

const car1 = new Car("현대", "제네시스", 2025);
const car2 = new Car("현대", "쏘나타", 2025);
const car3 = new Car("현대", "아반떼", 2025);

console.dir(car1.__proto__.drive()); // Car.prototype이 drive를 호출한 객체다
console.dir(car1.drive()); // car1이 drive를 호출한 객체다

// drive를 prototype에 선언하면, 여러 인스턴스가 생성되어도 새로운 drive를 생성하는 것이 아닌,
// Car의 prototype에 존재하는 drive 함수를 참조하게 된다. 메모리 절약 가능
car1.drive();
car2.drive();
car3.drive();
// 이 때, Car에 직접적으로 drive 함수가 없어도 프로토타입 체이닝으로 프로토타입에서 drive함수를 찾아 실행

/*
그런데, Car의 프로토타입도, 누군가의 인스턴스 객체이다. 
= 프로토타입도 객체도 내부에 프로토타입 객체를 가지고있다.

그 프로토 타입은 Object 라는 함수를 가리키고 있다.
결국 Car의 프로토타입은 => Object()라는 함수의 객체
*/

// 펑션은 호출 화살표는 선언

// 프로토타입
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = function () {
    console.log(`Driving a ${this.year} ${this.make} ${this.model}`);
  };
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2021);
const car3 = new Car("Ford", "Mustang", 2022);

// 모든 함수는 prototype 속성을 가지고 있다.

// dir 객체의 속성을 계층적으로 출력해주는 메서드
console.dir(car1);
console.dir(car2);
console.dir(car3);

// 프로토타입 체이닌
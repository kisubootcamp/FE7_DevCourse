function Car(make, model, year) {
  // 1) 매개변수 받기
  this.make = make;
  this.model = model;
  this.year = year;
  Car.prototype.drive = function () {
    // 2) 인스턴스 메서드로 연결
    return `출력해요 ${this.make}, 또해요 ${this.model}`; // 3) 템플릿 ${}
  };
}

const myCar1 = new Car("Hyundai", "Avante", 2023);
const myCar2 = new Car("bmw", "bWC", 2024);
const myCar3 = new Car("이상엽", "Avante", 2023);
console.dir(myCar1);
console.dir(myCar2);
console.dir(myCar3);
console.log(myCar1.drive()); // 프로토타입 체인, 프로토타입 체이닝
//함수 하나당 프로토타입이라는 공간이 존재한다76

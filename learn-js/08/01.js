// 생성자 함수
// 함수를 이용해서 객체를 만들어낼 수 있는 방법

function Car(name, maxSpeed = 200) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = this.maxSpeed + 200;
  this.getInfo = function () {
    return `나는 ${this.name}입니다. 최고속도는 ${this.maxSpeed}`;
  };
}

// 인스턴스(=객체)
const car1 = new Car("BMW", 100);
const car2 = new Car("Benz");
const car3 = new Car();

car1.speed = 250;

console.log(car1.getInfo());
console.log(car1);

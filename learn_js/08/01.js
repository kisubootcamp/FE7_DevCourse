// 생성자 함수
// 함수를 이용해서 객체를 만들어낼 수 있는 방법

function Car(name, maxSpeed) {
  this.uname = name;
  this.maxSpeed = maxSpeed;
  this.speed = this.maxSpeed + 200;
  this.getInfo = function () {
    return `차종: ${this.uname}, 최고속도: ${this.maxSpeed}`;
  };
}

//인스턴스
const car1 = new Car('Bmw', 100);
const car2 = new Car('Benz');

console.log(car1);
console.log(car1.getInfo());
console.log(car2.getInfo());

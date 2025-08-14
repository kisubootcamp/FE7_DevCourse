// 생성자 함수
// 함수를 이용해서 객체를 만들어낼 수 있는 방법

// 함수의 식별자를 대문자 ( 파스칼 케이스 )
function Car(name, maxSpeed = 200) {
  this.uname = name;
  this.maxSpeed = maxSpeed;
  this.speed = this.maxSpeed;
  this.getInfo = function () {
    return `나는 ${this.uname}입니다. 최고속도는 ${this.maxSpeed}입니다`;
  };
}

// 인스턴스 instance (=객체)
const car1 = new Car('bmw');
const car2 = new Car('benz');

console.log(car1);
console.log(car1.getInfo());
console.log(car2.getInfo());

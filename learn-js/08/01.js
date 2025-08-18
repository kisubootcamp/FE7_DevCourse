// 생성자 함수
// 함수를 이용해서 객체를 만들어낼 수 있는 방법
function Car(name, maxSpeed) {
  this.uname = name;
  this.maxSpeed = maxSpeed;
  this.getInfo = function () {
    return `Car name is ${this.uname}`;
  };
}

// 인스턴스(=객체)
const car1 = new Car("BMW");
const car2 = new Car("Mercedes");

console.log(car1);
console.log(car1.getInfo()); // Car name is BMW
console.log(car2);
console.log(car2.getInfo());

// this 키워드로 객체의 속성에 접근할 수 있다.

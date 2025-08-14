// 생성자 함수
// 함수를 이용해서 객체를 만들어 낼 수 있는 방법
function Person() {
  this.uname = "kim";
  this.age = 20;
}
// 인스턴스(=객체)
const user1 = new Person();
user1.uname = "park";
console.log(user1);

function Car(name, maxSpeed = 200) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.getInfo = function () {
    return `차종: ${name}, 최고속도: ${maxSpeed}`;
  };
}
const car1 = new Car("Benz", 100);
const car2 = new Car("Bmw");
console.log(car1.getInfo());
console.log(car2.getInfo());

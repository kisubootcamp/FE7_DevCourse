// 생성자 함수
// 함수를 이용해서 객체를 만들어낼 수 있는 방법
function Person() {
	this.name = "kim";
	this.age = 20; // this는 속한곳?
}

const user1 = new Person();
console.log(user1);

// 객체 ? 인스턴스
const user = {
	name: "kim",
	age: 20,
};

console.log(user);

// 객체와 생성자함수 거의 차이가 없음!!
/* 

Person { name: 'kim', age: 20 }
{ name: 'kim', age: 20 }

*/

// 매개변수에 기본값 지정하기
function Car(name, maxSpeed = 200) {
	this.name = name;
	this.maxSpeed = maxSpeed;
  this.getInfo = function () {
    return `나는 ${this.name} 자동차 입니다`
  }
}
const car1 = new Car("bmw", 100);
const car2 = new Car("benz");

console.log(car1);
console.log(car2);

console.log(car1.getInfo())
// 함수를 이용해서 객체를 만들어낼 수 있는 방법 (생성자 함수)

function Person() {
  this.name = "Default Name"; // 생성자 함수 내부에서 this를 사용하여 객체의 속성을 정의
  this.age = 0;
}
const user4 = new Person(); // 생성자 함수를 사용하여 객체를 생성
console.log(user4); // 생성자 함수로 만들어진 객체를 인스턴스 < ==

function Car(name, maxspeed = 200) {
  this.name = name;
  this.maxspeed = 0;
  this.getInfo = function () {
    return `차종 ${this.name}, 최고속도 &{this.maxspeed} 입니다`;
  }; // 생성자 함수 내부에서 this를 사용하여 객체의 속성을 정의
}

const car1 = new Car("소나타"); // 생성자 함수를 사용하여 객체를 생성
// 생성자 함수로 만들어진 객체에 속성 추가
const car2 = new Car("Benz"); // 생성자 함수로 만들어진 객체를 인스턴스
console.log(car1, car2); // 생성자 함수로 만들어진 객체를 인스턴스 < ==

console.log(car1.getInfo()); // 생성자 함수로 만들어진 객체의 메서드 호출

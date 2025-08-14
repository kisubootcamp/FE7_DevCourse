// 프로토 타입 (공용 창고)
// 어떤 함수든 생성될 때 프로토 타입이라는 속성을 갖고 있는다.
// 생성자 함수로 인해 생긴 인스턴스 객체도 부모의 프로토타입을 공유 받는다.
// 공용 창고 느낌으로 사용
function Car(make, model, year) {
  // 멤버 속성
  this.make = make;
  this.model = model;
  this.year = year;
}
Car.prototype.author = 'lee';
Car.prototype.drive = function () {
  return `${this.make}, ${this.model}, ${this.year}`;
};

const car1 = new Car('bmw', 'bmw11', '2020');
const car2 = new Car('현대', '쏘나타', '2020');
const car3 = new Car('현대', '아반떼', '2020');

// dir 객체의 속성을 계층적으로 출력해주는 메서드
console.dir(car1);
console.dir(car2);
console.dir(car3);
console.log(car1.drive()); // 프로토타입 체인,

// 프로토타입에는 author, drive, constructor 뿐이다.
console.dir(car1.__proto__.drive());

// Car 생성자 함수에 this make, model, year가 있기 때문에 정상값나옴
console.dir(car1.drive());

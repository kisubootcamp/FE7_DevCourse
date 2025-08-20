// 프로토타입
// 모든 함수에는 그 함수와 1:1로 매칭되는 별도의 공간이 존재함
function Car(make, model, year) {
    // 멤버 속성
    this.make = make;
    this.model = model;
    this.year = year;
}

// 생성자 함수가 prototype 내부에 심어짐
Car.prototype.author = "kim";
// 화살표 함수 내에서는 this를 사용할 수 없음
Car.prototype.drive = function () {
    return `${this.make}, ${this.model}, ${this.year}`;
}

const car1 = new Car("현대", "제네시스", 2025);
const car2 = new Car("현대", "쏘나타", 2025);
const car3 = new Car("현대", "아반떼", 2025);

// dir : 객체의 속성을 계층적으로 출력해주는 메서드
console.log(car1);

console.dir(car1.make);
console.dir(car2.model);
console.dir(car3.year);

console.log(car1.__proto__.author());
console.log(car1.author());
console.log(car1.drive()); // 프로토타입 체인,프로토타입 체이닝

console.log(car1.__proto__);
console.log(car1.__proto__.drive());
console.log(car1.drive());
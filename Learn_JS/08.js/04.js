// 프로토타입
function Car(make, model, year) {
    // 멤버 속성
    this.make = make;
    this.model = model;
    this.year = year;
    this.drive = function () {
        return `${this.make}, ${this.model}, ${this.year}`;
    }
}

Car.prototype.author = "kim";
Car.prototype.drive = function () {
    return `${this.make}, ${this.model}, ${this.year}`;
}

const car1 = new Car("현대", "제네시스", "2025");
const car2 = new Car("현대", "쏘나타", "2025");
const car3 = new Car("현대", "아반떼", "2025");

// dir 객체의 속성을 계층적으로 출력해주는 메서드
console.log(car1); 
console.log(car1.__proto__.author); 
console.log(car1.author); 

console.log(car1.__proto__); 
console.log(car1.__proto__.drive()); // [[prototype]] 

console.dir(car1.make); 
console.dir(car1.model); 
console.dir(car1.year); 
console.log(car1.drive()); // 프로토타입 체인, 프로토타입 체이닝

// 상속 예제 1

function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.info = function () {
  return `This is a ${this.type}`;
};

function Car(brand) {
  // ㅈㅏㅅㅣㄱ
  Vehicle.call(this, "Car");
  this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.getInfo = function () {
  return `${this.type},${this.brand} `;
};

const car1 = new Car("Toyota");
console.log(car1.info());
console.log(car1.getInfo());

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.drive = () => {
    console.log(this.make, this.model, this.year);
  };
}

Car.prototype.author = "kim";
Car.prototype.drive = function () {
  return `Driving a ${this.year} ${this.make} ${this.model}`;
};

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2021);
const car3 = new Car("Ford", "Mustang", 2022);

console.dir(car1.__proto__);
console.dir(car1.author);

console.dir(car1.__proto__);
console.dir(car1.__proto__.drive());
console.dir(car1.drive());

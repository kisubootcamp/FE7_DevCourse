//생성자 함수
//함수로 객체글 정의하는 방법
//new 키워드 + 함수

function Person() {
  console.log(this);
  console.dir(person);
  console.dir(person.prototype); //slot (슬롯)
  this.name = "Kim";
  this.age = 20;
}

const p1 = new Person(); //{}.Person()
console.dir(p1);

//this는 호출 방식에 따라 달라진다.
window.Person();
const obj = {
  person: Person,
};

//new.Person(); //{}.Person()
// this는 Person. 새로운 객체를 만들어 그 객체를 바탕으로 person을 호출하는 것과 동일
console.dir(Person);
console.dir(Person.prototype);

//상속 예제
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.info = function () {
  return `%${this.type} vehicle`;
};

function Car(brand) {
  Vehicle.call(this, "car");
  this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.getInfo = function () {
  return `%${this.type}, ${this.brand} vehicle`;
};

const car1 = new Car("BMW");
console.log(car1.info());
console.log(car1.getInfo());

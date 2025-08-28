// 상속, B가 A의 하위 개념이면, B가 A를 상속할 수 있음

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

// 새로운 객체를 만들건데, 그 객체의 프로토타입을 Animal.prototype으로 하겠다
// {} ->
Dog.prototype = Object.create(Animal.prototype); //Object.create 새로운 객체를 매개변수를 참조해서 만들어줌
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

const dg = new Dog("puppy", 20);
console.dir(dg);
console.log(dg.speak());

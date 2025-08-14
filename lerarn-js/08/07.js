// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return `${this.name}`;
// };

// const pr1 = new Person("kim");
// console.log(pr1.getName());

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

const an = new Animal("cat");
console.log(an.name);
console.log(an.speak());

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

// 새로운 객체를 만들건데, 그 객체의 프로토 타입을 Animal.prototype으로 하겠다.
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

const dg = new Dog("puppy", 20);
console.dir(dg);
console.log(dg.speak());

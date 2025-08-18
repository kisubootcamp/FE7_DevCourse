/* function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return `${this.name}`;
};

const pr1 = new Person("kim");
console.log(pr1.getName());
 */

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};
/* const ani = new Animal("cat");
console.log(ani.name);
console.log(ani.speak()); */

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype = Object.create(Animal.prototype); // 프로토타입 상속

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

const dg = new Dog("puppy", 20);
console.log(dg.name);
console.log(dg.age);
console.log(dg.bark());
console.log(dg.speak());

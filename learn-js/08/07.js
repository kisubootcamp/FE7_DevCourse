// 상속

function Person(name) {
  this.name = name;
  this.getName = function () {
    return `${this.name}`;
  };
}

Person.prototype.getName = function () {
  return `${this.name}`;
};

const pr1 = new Person("Lee");
console.log(pr1.getName()); // Lee

//

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

const an = new Animal("Dog");
console.log(an.name); // Dog
console.log(an.speak()); // Dog makes a noise.

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype.bark = function () {
  console.log(`${this.name} barks!`);
};

const dg = new Dog("Buddy", 3);
console.log(dg.name); // Buddy
console.log(dg.age); // 3
console.log(dg.bark()); // Buddy barks!

//

// 새로운 객체를 만들건데, 그 객체의 프로토타입을 Animal.prototype으로 하겠다.
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};
const dg2 = new Dog("puppy", 5);

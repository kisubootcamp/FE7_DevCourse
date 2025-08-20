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

// 새로운 객체를 만들건데 그 객체의 프로토타입을 Animal.prototype으로
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

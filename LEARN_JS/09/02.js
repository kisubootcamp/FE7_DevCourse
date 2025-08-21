// 2.1 상속?
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

function Developer(name, age, skill) {
  this.name = name;
  this.age = age;
  this.skill = skill;
}

// Person.prototype 참조해서 새로운 객체를 만들겠다.
// const newObject = Object.create(Person.prototype)
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const dev1 = new Developer("kim", 20, "javascript");
console.dir(dev1.getInfo());
console.dir(dev1.hasOwnProperty("name"));

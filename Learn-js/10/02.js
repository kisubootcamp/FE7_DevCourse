class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greets() {
    return `Hi`;
  }
}
/* Person.prototype.greets = function () {
  return `Hi`;
}; */
const per1 = new Person("kim", 20);

console.log(typeof Person);
console.dir(per1);
console.log(per1.greets());

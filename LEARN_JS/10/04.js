// 1. 게터 (getter)
// 1.1 getter -> get + -er -> 얻는 사람 또는 얻는 기능
// 2. 세터 (setter)
// 2.1 setter -> set + -er -> 설정하는 사람 또는 설정하는 기능

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.info = `${this.name}, ${this.age}`;
  this.trans = function () {
    return `${this.name}, ${this.age}`;
  };
}
const p1 = new Person("kim", 23);
p1.name = "park"; // p1.name = "lee"; // 이렇게 하면 info는 변경되지 않음

console.dir(p1);
console.log(p1.info);

//---------------------------------------

function Person(lastName, firstName) {
  this.lastName = lastName;
  this.firstName = firstName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
// const p1 = new Person("kim", "minsun");
// console.log(`${p1.lastName} ${p1.firstName}`);
// console.log(p1.fullName);

// p1.lastName = "dkdkd";
// console.log(p1.fullName());

//---------------------------------------
Object.defineProperty(Person.prototype, "fullName", {
  get: function () {
    return `${this.lastName} ${this.firstName}`;
  },
  set: function (value) {
    const [lastName, firstName] = value.split("");
    this.lastName = lastName;
    this.firstName = firstName;
  },
});
const p1 = new Person("kim", "minsun");
p1.fullName = "park chul su";

console.log(p1.lastName);
console.log(p1.firstName);
console.log(p1.fullName);

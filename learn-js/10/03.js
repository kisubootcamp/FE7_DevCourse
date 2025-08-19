// 1. 게터(getter)
// 1.1 getter -> ger + -er -> "얻는 사람" 또는 "얻는 기능 "
// 2. 세터(seter)
// 2.1 set -> -er -> "설정하는 사람" 또는 "설정하는 기능"

function Person(age, name) {
  this.name = name;
  this.age = age;
  this.info = `${this.name}, ${this.age}`;
}

const p1 = new Person("Kim", 20);
p1.name = "park"; // 만든당시 이름으로 저장이되어 변경해도 반영이안됨
console.log(p1.info);

Object.defineProperty(Person.prototype, "info", {
  get: function () {
    return `${this.name} ${this.age}`;
  },
  set: function (value) {},
});

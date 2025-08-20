// 1. 게터(getter) -> get + -er : "얻는 사람" 또는 "얻는 기능"
// 2. 세터(setter) -> set + -er : "설정하는 사람" 또는 "설정하는 기능"

// function 버전
function Person(lastName, firstName) {
  this.lastName = lastName;
  this.firstName = firstName;
}

Object.defineProperty(Person.prototype, "fullName", {
  get: function () {
    return `${this.lastName} ${this.firstName}`;
  },
  set: function (value) {
    console.log(value);
    const [lastName, firstName] = value.split("");
    this.lastName = lastName;
    this.firstName = firstName;
  },
});

const p1 = new Person("kim", "bab");
console.log(p1.lastName);
console.log(p1.fullName);
p1.lastName = "park";
console.log(p1.lastName);
console.log(p1.fullName);
p1.fullName = "park chul su"; // "park chul su"

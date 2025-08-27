/*

1. Getter => 얻는 기능
2. Setter => 설정하는 기능

*/

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Object.defineProperty(Person.prototype, "fullName", {
  get: function () {
    return `${this.lastName} ${this.firstName}`;
  },
  set: function (value) {
    const [lastName, firstName] = value.split(" ");
    this.lastName = lastName;
    this.firstName = firstName;
    // this.fullName = `${this.lastName} ${this.firstName}`;
    // setter 호출하면 무한 루프
  },
});

const p1 = new Person("kim", "kisu");
p1.fullName = "park chulsu";
console.log(p1.fullName); // park chulsu

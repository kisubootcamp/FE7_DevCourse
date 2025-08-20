// getter: 얻는 사람 또는 얻는 기능
// setter: 설정하는 사람 또는 설정하는 기능

function Person(lastName, firstName) {
  this.lastName = lastName;
  this.firstName = firstName;
  //   this.fullName = function () {
  //     return `${this.lastName} ${this.firstName}`;
  //   };
}

Object.defineProperty(Person.prototype, "fullName", {
  get: function () {
    return `${this.lastName} ${this.firstName}`;
  },
  set: function (value) {
    const [lastName, firstName] = value.split(" ");
    this.lastName = lastName;
    this.firstName = firstName;
  },
});

const p1 = new Person("Lee", "Jin");
p1.lastName = "Kim"; // 동적으로 속성 변경 가능
console.log(p1.fullName); // getter 호출
p1.fullName = "Min Ji"; // setter 호출
console.log(p1.fullName); // Kim Jin

//getter와 setter
function Person(lastName, firstName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Object.defineProperty(Person.prototype, "fullName", {
  get: function () {
    return `${this.lastName} ${this.firstName}`;
  }, // 어떠한 속성의 값을 읽으려고 할 때 호출
  set: function (value) {
    const [lastName, firstName] = value.split(" ");
    this.lastName = lastName;
    this.firstName = firstName;
  }, //세터: 어떠한 속성의 값에 값을 할당하려고 할 때 호출
});

const jiho = new Person();
jiho.fullName = "kim jiho"; /// 세터 호출
console.log(jiho.fullName); // 게터 호출

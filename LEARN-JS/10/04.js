// 1. 게터(getter)
// 1.1 get + -er -> "얻는 사람" 또는 "얻는 기능"
// 2. 세터(setter)
// 2.1 set + -er -> "설정하는 사람" 또는 "설정하는 기능"

function Person3(lastName, firstName) {
  this.lastName = lastName;
  this.firstName = firstName;
}

Object.defineProperty(Person3.prototype, 'fullName', {
  get: function () {
    return `${this.lastName} ${this.firstName}`;
  },
  set: function (value) {
    const [lastName, firstName] = value.split(' ');
    this.lastName = lastName;
    this.firstName = firstName;
  },
});

const p3 = new Person3('John', 'Andrew');
p3.fullname = 'park chulsu';
console.log(p3.lastName);
console.log(p3.firstName);
console.log(p3.fullname);

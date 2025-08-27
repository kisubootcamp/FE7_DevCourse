// 1. 게터(getter)
// 1.1 getter -> get + -er -> "얻는 사람" 또는 "얻는 기능"
// 2. 세터(setter)
// 2.1 set + -er -> "설정하는 사람" 또는 "설정하는 기능"
function Person(lastname, firstName) {
    this.lastName = lastname; // 성
    this.firstName = firstName; // 이름
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
  
  const p1 = new Person("kim", "kisu");
  p1.fullName = "park chulsu";
  
  console.log(p1.lastName); // park
  console.log(p1.firstName); // chulsu
  console.log(p1.fullName); // park chulsu
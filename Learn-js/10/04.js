// getter, setter class 버전
class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  // 게터: 함수x 속성 이름으로 접근하면 자동으로 실행됨
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    [this.lastName, this.firstName] = value.split(" ");
  }

  get reverseName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const p1 = new Person("jj", "fwf");
p1.fullName = "wkd kim";
console.dir(p1);
console.log(p1.fullName);
console.log(p1.reverseName);

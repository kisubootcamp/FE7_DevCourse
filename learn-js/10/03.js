// class 의 get과 set
class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    // this.fullName = value; 이것 때문에 물한루프 생김
  }
}

const p1 = new Person("kim", "kisu");
p1.fullName = "park younghee";
console.log(p1.fullName);

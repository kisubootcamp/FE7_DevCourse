class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  // 게터 = 함수 (x)
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    this.fullName = value;
  }

  get reverseName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Person("Jeong", "Jinhwan");
p1.fullName = "kim kisu";
console.log(p1.fullName);
console.log(p1.reverseName);

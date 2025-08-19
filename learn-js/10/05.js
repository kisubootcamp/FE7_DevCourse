class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  // 게터  = 함수 (x)
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

const p1 = new Person("kim", "kisu");
p1.fullName = "park younghee";

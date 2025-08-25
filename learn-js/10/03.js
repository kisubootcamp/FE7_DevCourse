class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  // getter와 setter는 함수가 아니라 그냥 게터, 세터
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    const [lastName, firstName] = value.split(" ");
    this.lastName = lastName;
    this.firstName = firstName;
  }

  get reverseName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Person("kim", "kisu");
p1.fullName = "park younghee";
console.log(p1.fullName);
console.log(p1.reverseName);

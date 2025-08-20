class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    [this.lastName, this.firstName] = value.split(' ');
  }
  get reverseName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
const p1 = new Person('Kim', 'kisu');
p1.fullName = 'park younghee';
console.dir(p1);
console.log(p1.fullName);
console.log(p1.reverseName);

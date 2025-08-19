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

    // 무한스택
    // this.fullName = value;
  }
}

const p1 = new Person('lee', 'hyunjun');
p1.fullName = 'kim kimkim';
console.dir(p1);
console.log(p1.fullName);

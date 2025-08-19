class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  get fullName() {
    //게터는 히든속성추가됨
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    [this.lastName, this.firstName] = value.split("");
  }
}

const p1 = new Person("Lee", "Sang Yeop");
console.dir(p1);
console.log(p1.fullName);

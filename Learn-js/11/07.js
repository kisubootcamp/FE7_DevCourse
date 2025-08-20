const person = {
  firstName: "fkdk",
  lastName: "asf",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

person.fullName = "asdfffa ag";
console.log(person.fullName);

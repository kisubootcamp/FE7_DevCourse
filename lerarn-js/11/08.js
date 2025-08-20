const person = {
  firstName: "kisu",
  lastName: "kim",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

person.fullName = "min park";
console.log(person.fullName);

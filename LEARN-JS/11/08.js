const person = {
  firstName: 'hyunjun',
  lastName: 'lee',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  },
};

person.fullName = 'min park';
console.log(person.fullName);

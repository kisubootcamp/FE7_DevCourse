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

// enum
const Roles = Object.freeze({
  ADMIN: "amin",
  USER: "user",
  GUEST: "guest",
});

const config = Object.freeze({
  apiUrl: "http://localhost:3000",
  timeout: 3000,
});

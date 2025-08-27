//클래스만이 아닌 객체에서도 getter/setter를 설정해줄 수 있다.
const person = {
  firstName: "Kisu",
  lastName: "Kim",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};
console.log(person.fullName);
person.fullName = "min park";
console.log(person.fullName);

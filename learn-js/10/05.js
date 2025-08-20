class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  // getter는 함수로 바라보지 않는다.
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    const [lastName, firstName] = value.split(" ");
    this.lastName = lastName;
    this.firstName = firstName;
    // this.fullName = `${this.lastName} ${this.firstName}`; // setter 호출
    // setter를 호출하는 것은 무한 루프를 발생시킨다.
  }
}

const p1 = new Person("Lee", "Jin");
p1.fullName = "Kim Min"; // setter 호출
console.dir(p1);
console.log(p1.fullName); // Lee Jin

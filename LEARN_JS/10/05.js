// 같은 코드를 클래스로
class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }
  // 게터 = 함수 x
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    [this.lastName, this.firstName] = value.split(" "); // setter는 값을 설정할 때 사용
  }
  get reversName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Person("Kim", "minsun");
console.dir(p1);
console.log(p1.fullName);
console.log(p1.reversName);

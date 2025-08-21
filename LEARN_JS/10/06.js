// 클래스 문법에서는 프라이빗필드를 사용할 수 있습니다.
class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  get age() {
    return this.#age;
  }
  set age(value) {
    if (value < 0) throw new Error("Invalid age");
    this.#age = value;
  }
}
const p1 = new Person("kim", 23);
p1.age = 30; // setter를 통해 age를 변경
console.log(p1.age);

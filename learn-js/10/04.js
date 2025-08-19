//프라이빗 필드
// ES2022
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
    // #로 프라이빗을 해놔도 값을 바꿀 일이 생기면 이렇게 set을 이용해서 바꿀 수 있기는 함
    if (value < 0) throw new Error("invalid age");
    this.#age = value;
  }
}

const p1 = new Person("kim", 20);
p1.age = -10;
console.log(p1.age);

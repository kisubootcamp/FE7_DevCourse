// 클래스에서의 게터세터

class Person {
  #age; // 샵 필드, private
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.#age = 20;
  }

  get fullName() {
    // 게터(키워드), 함수가 아님. fullName이라는 게터
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    // 함수 호출이 아닌, 속성 할당. = 를 사용해 값을 할당한다!
    [this.lastName, this.firstName] = value.split(" ");
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value < 0) throw new Error("Invalid age");
    this.#age = value;
    // 특정 범위 내의 값만 받을 수 있게 되었음
  }
}

const p1 = new Person("kim", "jiho");
console.dir(p1);
console.log(p1.fullName);
p1.fullName = "kim chulsu";
console.log(p1.fullName);
console.log(p1.lastName);
console.log(p1.firstName);
console.log(p1.age);
p1.age = 25;
console.log(p1.age);

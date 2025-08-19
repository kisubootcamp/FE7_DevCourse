// Object 객체 오버라이딩
// 기본 메서드같이 있는 toString 같은 메서드 애들도 아래에서 오버라이딩을 해서 출력하게 하는 값을 바꿀 수 있음

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return `${this.name} (${this.age})`;
  }
}

const p = new Person("kim", 20);
console.log(String(p));
console.log(p.toString());
console.log(p);

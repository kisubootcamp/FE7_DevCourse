class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 정적 속성을 사용할 때는 대문자로
  static APP_NAME = "Person App";

  // static 메서드 = 정적 메서드
  // 클래스 자체에 붙는 메서드라는 뜻입니다.
  static greet() {
    return `Hello`;
  }
}
const p1 = new Person("kim", 23);
// console.log(p1.greet()); // 정적 메서드는 인스턴스에서 호출할 수 없습니다.
console.log(Person.APP_NAME);
console.log(Person.greet()); // 정적 메서드는 클래스에서 호출해야 합니다.

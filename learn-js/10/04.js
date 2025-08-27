// 정적 메서드
// 인스턴스에서 생성할 수 없는 메서드
class Person {
  constructor(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
  }

  // 정적 속성 static property
  static APP_NAME = "Person Android";

  static greet() {
    //static method
    return `Hello`;
  }
}

const p1 = new Person("kim", "jiho");
//console.log(p1.greet()); 안됨
console.log(Person.greet());
// console.log(p1.APP_NAME); 안됨
console.log(Person.APP_NAME);

//클래스 이름으로만 접근이 가능하다!
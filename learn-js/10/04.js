class Person {
  #age; //프라이빗 필드 출력에서 안보인다.
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  //프라이빗 필드일때 get/set을 함께 사용하는 경우는 없다.
  get age() {
    return this.#age;
  }

  set age(value) {
    if (value < 0) throw new Error("Ivalid age");
    this.#age = value;
  }

  //static method (정적 메서드)
  //멤버 속성에 this를 사용하여 접근할 수 없다. 따라서, 멤버 속성과 독립적인 로직을 짤 때 사용.
  //정적 속성은 대문자 사용한다.
  static Greet() {
    return `Hello`;
  }
  //정적 속성
  static APP_NAME = "Person Android";
}

const p1 = new Person("kim", 20);
p1.age = 30;
console.log(p1.age);
console.log(p1);
//console.log(p1.#age);
//프라이빗 필드를 바깥에서 사용하지 못하게! 함
//클로저 설탕 문법의 일종

console.log(Person.Greet()); //정적 메소드는 클래스 이름.메소드 명으로 사용
console.log(Person.APP_NAME);

class MathUtils {
  static PI = 3.14;
  static add(a, b) {
    return a + b;
  }
  static minus(a, b) {
    return a - b;
  }
}

console.log(MathUtils.PI);

console.log(MathUtils.add(4, 2));
console.log(MathUtils.minus(4, 2));

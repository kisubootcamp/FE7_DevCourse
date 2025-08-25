// static, 정적 메서드, 정적 속성

class Person {
  constructor(name, age){
    this.name=name;
    this.age=age;
  }
  
  // static 메서드 (정적 메서드)
  // ㄴ 인스턴스 객체에서 접근 불가
  static greet(){
    return `Hello, ${this.name}`;
  }
  // static property (정적 속성)
  static APP_NAME = "Person Android";
  // 항상 대문자로 작성 (암묵적 규칙)
}

const p1 = new Person("kim",20);

//console.dir(p1.greet()); // 오류 : 체이닝 해도 원래 함수는 찾지 않으니 찾을 수 없음
console.dir(Person.greet()); // 해결 : class 이름에서만 가능, 인스턴스 객체에서는 접근 불가
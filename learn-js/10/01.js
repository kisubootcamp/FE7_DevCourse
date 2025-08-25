// ES5
// ㄴ 프로토타입 기반의 생성자 함수
// ㄴ 프로토타입 기반으로 상속
function Person(){
  this.name = "Soo";
  this.age = 21;
}

const p1 = new Person();
console.log(p1);

// ES6  
// ㄴ < class 문법 >
// ㄴ 객체 지향 프로그래밍(OOP)를 더 직관&깔끔 하게 작성 가능하게 도입된 sugar syntax
// ㄴㄴ sugar syntax(syntax sugar) : 기존의 문법을 사용하기 쉽게 만든 문법 (기존의 문법과 똑같음, 작성 방식의 차이)
// ㄴㄴ () => {}, async..await 등
// ㄴ **내부 동작은 여전히 프로토타입 기반 상속, class 문법을 사용하면 전통적 클래스 기반언어(java,c++)*처럼* 코드 작성 가능
// jS는 클래스 기반 함수 XX :: 여전히 프로토타입 기반 함수 OO

class Person {
// this 사용하지 않음
  /*
  name;
  age;
  */
// name; age; 생략 가능 :: 타입 스크립트 기반에서는 생략 x / 자바 스크립트 에서는 생략이 일반적

// 매개 변수 받기 위해 constructor을 사용하여 초기화
constructor (name, age){
  this.name = name;
  this.age=age;
}
// constructor가 있다면 무조건 출력됨 : 인자 값이 없어도 출력 (undefined)
// constructor는 단 한개만 사용, 먼저 호출됨

// 단축 함수 (shorted method) 문법
// 메서드 등록법, 단축 문법을 제공해줌
greet (){
  return `Hi`;
}
// 생성자 함수처럼 프로토타입 정의가 필요 없음 (자동등록)
// ㄴ Person.prototye.greet = function(){} : 이거 필요하지 않음
// 단축 함수 문법으로 작성하면 자동으로 (프로토타입에) 등록됨 (?) -> 프로토타입 방식의 sugar syntax다
}
// 메서드가 아닌 공통 속성을 추가
Person.prototype.sucoding = "짱";
// 내부 속성에 존재하지 않지만 실행함 -> 프로토타입 객체에 추가됨
// 조금 기괴함, 근데 잘 쓰지는 않음, 그래서 단축 방법이 없나봐ㅏㅏ

const per1 = new Person("yeon",22);
const per2 = new Person("soo", 23);
const per3 = new Person("by",24);
console.dir(per1);
console.log(per1.greet());
console.log(per2);
console.log(per3);

console.log(typeof Person); //function
// 생긴건 클래스 지만 생성자 함수로 움직임 : 프로토타입 갖고 있음, 프로토타입 체인 그대로 쓰임
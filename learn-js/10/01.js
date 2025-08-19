/* 

ES5
프로토타입 기반의 생성자 함수
프로토 타입 기반으로 상속.

*/

function Person() {
	this.name = "kim";
	this.age = 20;
}
Person.prototype.greet = function () {
  return `H1`
}

const p1 = new Person();
console.log(p1);

/*

ES6
class 문법
객체지향 프로그래밍(OOP)를 더 직관적으로 깔끔하게 작성할 수 있도록 도입된 Sugar Syntax
Sugar Syntax란? 기존의 문법을 사용하기 쉽게 만든 문법을 말함
() => {}, async.. await 같은게 있음
내부 동작은 여전히 프로토타입 기반 상속이지만, class 문법을 사용하면 전통적인 클래스 기반 언어(java,c++)처럼 코드 작성할 수 있음

*/

class Person { // 클래스?라 Object.prototype으로 보이지만 생성자함수랑 똑같은거임
	// name;
	// age;
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
  // 구식. 거의 안씀
  // greet = function (){
  //   return `hello`
  // }
  // 단축함수 (shorthand method) 문법
  greets() {
    return `hi`
  }
}
const per1 = new Person("kim", 20);
const per2 = new Person("park", 30);
const per3 = new Person("yoon", 25);
console.log(per1);

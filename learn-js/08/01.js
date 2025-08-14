// 함수를 이용해서 객체를 만들어낼 수 있는 방법
// 객체를 만들어 내는 함수 => 생성자 함수

function Person(name = "unknown") {
  // 생성자 함수는 대문자로 시작하는 네이밍 규칙
  // return문 없음
  this.name = name; // this는 생성자 함수가 만드는 새로운 객체를 가리킨다

  this.getName = function () {
    return this.name;
  };
}

// user1 = 생성자 함수로 만들어진 객체 = 인스턴스
const user1 = new Person(); // new 키워드로 인해 함수의 리턴 결과가 객체가 됨
console.log(user1);
console.log(user1.name);

/*
유사한 객체 여러개 찍어내기에 용이
하지만 각각의 인스턴스 별로 독립적
*/

const user2 = new Person();
const user3 = new Person();

user2.name = "minsu";
user3.name = "chulsu";
console.log(user1.name, user2.name, user3.name);

console.log(user1.getName());

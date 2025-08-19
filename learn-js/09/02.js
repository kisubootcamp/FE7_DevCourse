// 1. 생성자 함수
// 1.1 함수로 객체를 정의하는 방법
// 1.2 new 키워드 + 함수
// 1.3 [[Prototype]] 가지고 있으면 인스턴스 객체이다.
// 1.3.1 자신을 생성한 생성자 함수의 prototype을 [[Prototype]]으로 가진다. (참조)

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function () {
    return `${this.name} is ${this.age} years old.`;
  };
  console.log(this);
}

Person();
new Person(); // 생성자 함수로 호출

console.dir(Person);
console.dir(Person.prototype); // slot(슬롯)

// 화살표 함수에서 this는 상위 스코프의 this를 참조한다.

const p1 = new Person("Lee", 30);
const p2 = new Person("Kim", 25);
console.dir(p1.getInfo()); // Lee is 30 years old.
console.dir(p2.getInfo()); // Kim is 25 years old.

const obj = {
  name: "park",
};
obj.name = "kim";
obj.age = 20;
console.log(obj);

delete obj.name; // 동적으로 속성을 삭제할 수 있다.
console.log(obj); // { age: 20 }

// 일반함수의 this는 자신을 호출한 객체
// 힘수를 어떻게, 누가 호출했는지에 따라 this가 달라진다.
// 화살표 함수의 this는 상위 스코프의 this를 참조한다.
// Person 함수 실행 컨텍스트 내부에 정의가 된 것.

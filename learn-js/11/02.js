// 객체
// {} 이용, 키와 값으로 구성된 속성(property)의 집합

/////////////////////////////////////////////////////////////////////////////////////////

// 1. 객체를 정의하는 방법 
// 1.1 리터럴(literal) 방법 :: {} 이용하는 방법, 객체 리터럴 방식으로 정의함
const obj = {
  name: "yeon", // property
};

// 1.2 Object 생성자 함수
const obj2 = new Object();

// 1.3 생성자 함수
function Person(name){
  this.name = name;
}
const obj3 = new Person("yeon");

// 1.4 Object.create()
const obj4 = Object.create(); // 완벽하게 비어있는 순수한 객체

// 등의 방법이 있음

///////////////////////////////////////////////////////////////////////////////////////

// 2. 프로퍼티 접근과 조작
// 속성과 값에 제한 없음 :: 문자열, 숫자열, 객체 등 뭐든 값으로 가질 수 있음 / 객체 안의 객체 안의 객체도 가능
const user = {
  name : "yeon",
  age : 18,
  address: {
    zipCode: 12345,
    details: {
      addr1: "경기",
      addr2: "용인",
    },
  },
  likes: [ "orange", "peach" ],
};

// 2.1 마침표 연산자
user.name;
user.address.zipCode;

// 2.2 대괄호 연산자
// 어쩔 수 없을 때만 사용, 대괄호가 아니면 안 될때만 사용
user["name"];
user["address"]["zipCode"];

// 2.3 조작
// 2.3.1 수정
// 이미 존재하는 속성에 값을 변경
user.age = 50;

// 2.3.2 추가 (동적 추가)
// 존재하지 않은 속성에 값을 줌 
user.gender = "female";

// 조작, 추가가 구분된 이유 :: 없는 속성을 참조하는 경우 error아니고, undefined임, 메모리에 할당될 준비를 하고 있음

// 2.3.3 삭제 (동적 삭제)
delete user.likes; // 삭제는 대괄호 사용하기도 함 / 삭제 리액션 없이 조용히 삭제됨
delete user.dddd; // 없는 속성을 삭제하려고 해도 에러가 없음

console.log(user);

///////////////////////////////////////////////////////////////////////////////////////

// 3. 객체 메서드에서의 this
// 객체 안에서 메서드를 가질 수 있음
let uname = "yeon";

const objects = {
  uname, // 외부에 uname 할당하고, 객체 안에 name만 적으면 가져다가 씀
  // -> 객체안에 뭔가 단독으로 있으면 (uname, 처럼) 어딘가에 그 이름의 변수가 선언되어 있음을 의미
  main : function() {
    console.log(this); // this는 나 자신을 가리킴 (화살표 라면 상위로 윈도우를 가리킴)
  },
  greet: function () {
    console.log(`Hello, ${objects.name}`);
    console.log(`Hello, ${this.name}`); // 이 쪽을 더 직관적이라고 생각하여 실무에서 많이 씀
  },
  greet() { // 단축 속성 방식, 위와 같음, 훨씬 많이 씀
    console.log(`Hello, ${objects.name}`);
    console.log(`Hello, ${this.name}`);
  },
};

Object.main();

// 실무에서 많이 쓰는 방식 (this 안 쓸 때 메서드 정의)
const cal = {

  subtract: function (a,b) {
    return a-b;
  },
  multiply: (a,b) => a-b, // 화살표 함수 방식
  add(a,b) { // 단축 속성 방식
    return a+b;
  },
  main,

};
// 방식은 여러 가지지만 일관성을 유지하기, 여러 명이여도 같은 방식으로 == 코드 컨벤션을 맞추자(준수하자)

///////////////////////////////////////////////////////////////////////////////////////

// 4. 객체의 순회
const person = {
  name: "kim",
  age: 20,
  job: "developer",
};

// 4.1 for-in
for (const key in person){
  console.log(key); // key를 출력
  console.log(person[key]); // 값, person.key 마침표 연산자는 불가능, 키라는 속성은 없음 / 이 경우가 []연산자를 어쩔 수 없이 사용하는 경우
}

// 4.2 [].forEach(); 메서드
["a","b","c"].forEach((v) => console.log(v));

// 4.3 Object.keys()
//console.log(Object.keys(person)); // 배열로 반환해줌ㅁ
Object.keys(person).forEach((key)=>{ // forEach로 반복 접근
  console.lof(person[key]);
})

// 4.4 Object.entries()
// 2차원 배열 형태로 반환
const arr = ["apple", "banana"];
const [a,b] = arr;
// 구조 분해 할당???
Object.entries(person).forEach(([key,value])=>{
  console.lof(key,value);
});

// 4.5 Object.values()
Object.values(person).forEach((v)=>console.log(v));

// 등이 있음, 많음, 실무에서는 이 정도가 잘 쓰임

///////////////////////////////////////////////////////////////////////////////////////

// 5. 객체를 복사 (+ 병합)

// 참고) 기본자료형과 참조자료형이 구분되는 이유 :: 값이 변수 공간(메모리) 안에 쏙 들어감 vs 값 자체가 들어가는게 아님
// 값 자체가 변수 안에 들어가는 것이 아니라 별도의 메모리 공간 안에 값을 넣은 담에, 변수에는 주소값을 넣는 것 

// 깊은 복사 (deep copy) (복사된 값 변경 불가) -> 이유 : 참고의 내용 때문
const num = 10; // 기본 자료형
const num2 = num; 
num = 50; 
console.log(num2);

// 얕은 복사 (shallow copy) (복사된 값 변경 가능)
// 복사한 원본 데이터를 조작했을 때, 복사의 대상이 되는 값이 같이 반환되는 것
// 변수에 값이 들어간게 아니라, 값의 주소값이 들어갔기 때문에 변경 가능, 얕게 복사됨 서로 영향을 받음
const arr1 = ['a']; // 참조 자료형
const arr2 = arr1;

arr1.push('b');
console.log(arr2);

// 5.1 얕은 복사 (+ 병합)
/*
const original = { name: "kim", addr: {zipCode: 123 }};
const original2 = { name:"park", age:20, gender:"male"};
*/

// 무조건 얕은 복사
const shallowCopy1 = original;
const shallowCopy2 = Object.assign({}, original);
const shallowCopy3 = { ...original,...original2}; // sugar

// 병합 -> 주의 :: 만약 속성 값이 겹친다면 뒤쪽에서 합쳐진 중복된 속성이 살아남음
const merge = Object.assign({}, original, original2);
console.log(merge);

console.log(shallowCopy1);
console.log(shallowCopy2);
console.log(shallowCopy3);

// 5.2 깊은 복사
// ㄴ 얘 사용 지향, 원치 않는 변경이 생길 수도 있으므로
const original = { name: "kim"};
const original2 = { age:20, gender:"male", addr: {zipCode: 123 }};

// 고전 방법
const deepCopy = JSON.parse(JSON.stringify(original2));
deepCopy.addr.zipCode = 10; // 얕은 복사면 둘 다 변경됨
console.log(original2);
console.log(deepCopy);

// 최신 방법
// 최신 브라우저가 아니면 안 될 수도 있음, 상황에 맞게 선택
const deepCopy2 = structuredClone(original2);
deepCopy2.addr.zipCode = 10;
console.log(deepCopy2);

///////////////////////////////////////////////////////////////////////////////////////
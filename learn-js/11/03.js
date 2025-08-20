// 6. 구조분해할당 (비구조화할당)

// 속성값 접근하려면
const person = { uname: "kim", age:20 };
console.log(person.uname);
console.log(person.age);
// 개별 접근 매번 마침표(대괄호)연산자 사용 귀찮음 -> 구조 분해 할당 (비구조화 할당) 사용

// 구조 분해 할당
// 객체
// ㄴ 반드시 객체의 키와 *똑같은() 이름으로 {} 에 적는다
const { uname, age } = { uname: "kim", age:20 };
console.log(uname);
console.log(age);
// 변수처럼 접근 가능

// 배열
// 객체와의 차이점 : 객체는 이름이 바뀌면 실행 안 됨, 배열은 자리수만 맞추면 어떤 이름이든 상관없음
const [a,b] = [10, 20];
console.log(a);
console.log(b);

// 6.1 alias (치환 문법)
// 객체에서 이름을 바꾸고 싶을 때, 받을 때는 쩔수, 할당 받고 나서 활용할 때는 다른 이름 사용
const { uname: userName, age: userAge } = { uname: "kim", age:20 };
console.log(userName);
console.log(userAge);

// 응용 1

// 중첩 구조 분해 할당 의 치환 ( 객체 안의 객체 & 배열 )
// ㄴ 객체 안의 객체 :: address: { city }
// ㄴ 객체 안의 배열 :: food: ...
const {name: uname2, age: uage, address: { city: ucity }, food: [apple,banana], } = {
  // 중첩되어진 address는 치환을 할 수 없음/  city는 가능
  name : "kim",
  age : 20,
  address: {city : Seoul},
  food: ["apple","banana"], 
};

console.log(uname2);
console.log(uage);
console.log(ucity);
console.log(apple,banana);

// 응용 2
const user = [
  { name: "kim", age: 20 },
  { name: "park", age: 21 },
];
// 를 구조분해할당
const [firstUser, { name, age3 }] = [
  { name: "kim", age3: 20 },
  { name: "park", age3: 21 },
];
// firstUser 도 { name, age } 로 바꾸면 이름이 겹쳐서 오류
// 해결법 : alias 사용
const [{ name : firstName, age3: firstAge }, { name: secondName, age3: secondAge }] = [
  { name: "kim", age3: 20 },
  { name: "park", age3: 21 },
];
console.log(firstName, firstAge, secondName, secondAge);

//
const {
  members: [{ name: fname, age: fage}, {name: sname, age: sage}],}
  = {
    members: [
      { name: "kim", age: 20},
      { name: "park", age: 20},
    ],
  };
console.log(fname, fage, sname, sage);

////////////////////////

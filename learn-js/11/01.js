// 객체!
// 객체는 키(key)와 값(value)으로 구성된 속성(property)의 집합.
// 1. 객체를 정의하는 방법
// 1-1. 리터럴(literal) 방법. 객체 리터럴
const obj = {
	name: "park", // 이걸 프로퍼티(property), 속성이라고 함
};
// 1-2. Object 생성자 함수
const obj2 = new Object();
// 1-3. 생성자 함수(class)
function Person(name) {
	this.name = name;
}
const obj3 = new Person("park");
// 1-4. Object.create()
const obj4 = Object.create();

// 2. 프로퍼티 접근과 조작
const user = {
	name: "kim",
	age: 20,
	address: {
		zipCode: 62323,
		detail: {
			add1: "인천 부평구",
			add2: "부평1동",
		},
	},
	likes: ["coffee", "bread"],
};
// 2-1. 마침표 연산자
user.name;
user.address.zipCode; // 실무에서는 웬만하면 마침표 연산자를 사용
// 2-2. 대괄호 연산자
user["name"];
user["address"]["zipCode"];
// 2-3. 조작
user.age = 50; // 수정
user.gender = "male"; // 추가(동적 추가)
delete user.gender; // 삭제
delete user.dddddd; // 없는걸 삭제해도 아무런 리액션이 업슴 *(에러도 안뜸)

// 3. 객체 메서드에서의 this
const uname = "parksanga";
const intro = function () {
	console.log(`${this.uname}`);
};
const objects = {
	name: "garlatonic",
	uname, // 이렇게도 할당이 가넝하고~
	intro,
	main: function () {
		console.log(this); // 여기서 this는? objects라는 객체를 가리킴
	},
	greet: () => {
		console.log(`Hello, ${objects.name}`); // 화살표함수에서 this 를 할라면 this말고 직접 쓰기
	},
	// 단축속성 <- 이걸 더 많이 씀
	greet() {
		console.log(`Hello, ${objects.name}`);
	},
};
objects.intro();

// 4. 객체 순회
const person = {
	name: "sanga",
	age: 29,
	gender: "female",
};
// for-in
for (const key in person) {
	console.log(person[key]);
}
// [].forEach()
["a", "b", "c"].forEach((p) => console.log(p));
// Object.keys()
Object.keys(person).forEach((key) => {
	console.log(person[key]);
});
// Object.entries()
const arr = ["apple", "banana"];
const [a, b] = arr;
Object.entries(person).forEach(([key, value]) => {
	console.log(key, value);
});
// Object.value() 값만 뽑아내기
Object.values(person).forEach((p) => console.log(p));

// 요 내용 가기 전에 02.js 보고 올것
// 5. 객체를 복사(병합)
const original = { name: "sanga", age: 29 };
const original2 = { age: 40, gender: "female", addr: { zipCode: 231234 } };
const copy = original;
const copy2 = Object.assign({}, original, original2); // 하나의 객체로 합체~ 하는데 중복된 속성이 있다면 나중에 할당한 객체 속성으로 적용
// console.log(copy2); // { name: 'sanga', age: 40, gender: 'female' }
const copy3 = { ...original, ...original2 }; // Object.assign()의 sugar syntax

// 5-1. 얕은복사
copy2.age = 50;
console.log(original); // { name: 'sanga', age: 29 }
console.log(original2); // { age: 40, gender: 'female' }
console.log(copy2); // { name: 'sanga', age: 50, gender: 'female' }
// 객체의 속성값에 기본자료형이면 원본에 따로 영향이 안감. 즉 깊은복사
// 그런데 객체의 속성에 참조자료형으로 값이 들어가있따면?
copy2.addr.zipCode = 24;
console.log(original); // { name: 'sanga', age: 29 }
console.log(original2); // { age: 40, gender: 'female', addr: { zipCode: 24 } }
console.log(copy2); // { name: 'sanga', age: 50, gender: 'female', addr: { zipCode: 24 } }
// 객체의 속성값에 참조자료형이라면 원본에도 영향이 감. 즉 얕은복사

// 5-2.깊은 복사
// ~ 고전적인 방법
const deepCopy = JSON.parse(JSON.stringify(original2)); // 이렇게? json으로 이케이케 하면?
deepCopy.addr.zipCode = 10;
console.log(original2); // { age: 40, gender: 'female', addr: { zipCode: 24 } }
console.log(deepCopy); // { age: 40, gender: 'female', addr: { zipCode: 10 } }
// 원본은 냅두고 복사한 객체만 변경됨
// ~ 최신 방법
const deepCopy2 = structuredClone(original2) // 구조적 복사. 구조체 복사
// nodejs 19버전부터 지원하는 함수. 
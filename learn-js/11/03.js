// 구조분해할당
// const person = { name: "kim", age: 20 };
const { name, age } = { name: "kim", age: 20 };
// console.log(name);
// console.log(age);

const [a, b] = [10, 20];
// console.log(a);
// console.log(b);

// 배열의 구조분해 할당은 자리순서만 잘 맞춰주면 되는데,
// 객체는 식별자에 대한 네이밍 규칙이 있음. 꼭 키와 같은 값을 넣어줘야함

// 6. 구조분해할당 (비구조화할당)
// 6-1. alias (치환)
const { name: userName, age: userAge } = { name: "kim", age: 20 };
console.log(userName);
console.log(userAge);

// const { uname, uage, uaddress } = {
const {
	uname, // 치환할라면?
	// uname: mname,
	uage,
	// uage: mage,
	uaddress: { city }, // 객체 안에 있는 걸로 갖고싶을 땐 일케. 중첩 구조분해 할당
	// uaddress는? 이ㅏ렇게 중첩 구조분해 할당을 했을 땐 치환이 안됨
	// uaddress: { city: mcity} 이렇게 ㅊ ㅣ환하는건 가능
	food: [apple, nananaa],
} = {
	uname: "kim",
	uage: 20,
	uaddress: { city: "seoul" },
	food: ["apple", "bananan"],
};
console.log(uname);
console.log(uage);
// console.log(uaddress);
console.log(city);
// console.log(food);
console.log(apple, nananaa);

// 배열안에 객체가 두개 있는 경우 구조분해할당은???
const [
	{ name: firstName, age: firstAge },
	{ name: secondName, age: secondAge },
] = [
	{ name: "kim", age: 20 },
	{ name: "park", age: 29 },
];
console.log(firstName, firstAge, secondName, secondAge);

const {
	members: [{ name: fstName, age: fstAge }, { name: secName, age: secAge }],
} = {
	members: [
		{ name: "kim", age: 20 },
		{ name: "park", age: 29 },
	],
};

function userInfo({ kname = "kim", kage = 20 }) {
	console.log(kname, kage);
}
userInfo()

const students = [
	{ name: "Alice", age: 21, gender: "male", height: 170 },
	{ name: "Bob", age: 19, gender: "male", height: 165 },
	{ name: "Charlie", age: 20, gender: "male", height: 175 },
	{ name: "David", age: 22, gender: "male", height: 180 },
	{ name: "Eve", age: 17, gender: "female", height: 160 },
	{ name: "Frank", age: 18, gender: "male", height: 175 },
	{ name: "Grace", age: 21, gender: "female", height: 165 },
	{ name: "Henry", age: 19, gender: "male", height: 170 },
	{ name: "Ivy", age: 14, gender: "female", height: 155 },
	{ name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 1명 찾기
{
	const up185 = students.find((student) => student.height >= 185);
	console.log(up185);
}

//2. 나이가 20살 이상인 학생들 찾기
{
	const under20 = students.filter((student) => student.age >= 20);
	console.log(under20);
}

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
{
	const under165 = students.some((student) => student.height <= 165);
	console.log(under165);
}

//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
{
	const up10 = students.every((student) => student.age <= 10);
	console.log(up10);
}

//5. 학생들의 평균 연령 구하기
{
	const averageAge = students.reduce((acc, student) => {
		acc += student.age;
		return acc;
	}, 0);
	console.log(averageAge / students.length);
}

//6. 남학생들의 평균 연령 구하기
{
	const males = students.filter((student) => student.gender === "male");
	const averageAgeM = males.reduce((acc, student) => {
		acc += student.age;
		return acc;
	}, 0);
	console.log(averageAgeM / males.length);
}

//7. 야학생들의 이름만 따로 추출해서 새로운 배열 만들기
const females = students.filter((student) => student.gender === "female");
const nameF = females.map((student) => student.name);
console.log(nameF);

//8. 여학생들 중 나이가 가장 어린 학생 찾기
const youngestF = females.sort((a, b) => a.age - b.age);
console.log(youngestF[0]);

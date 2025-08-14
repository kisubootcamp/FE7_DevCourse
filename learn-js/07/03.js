function createUser(name) {
	let _name = name; // _로 쓰는 이유는? private
	return {
		getName: () => _name,
		setName: (newName) => (_name = newName),
	};
}

let user = createUser("park");
console.log(user.getName());
user.setName("kim");
console.log(user.getName());
user = undefined;

let user2 = createUser("kim");
console.log(user2.getName());
user2 = undefined;

// 강사님께선 const로 하셨는데 let이 맞다고하심 (질문함)
// const로 해도 된다면?
const user3 = createUser("lee");
console.log(user3.getName());
user3.getName = null;
user3.setName = null;
// 만약 return하는 값이 객체라면 전부 일케 넣기

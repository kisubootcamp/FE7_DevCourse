// this
// 함수를 호출한 객체를 가리킨다.

// 화살표 함수의 this, 일반 함수의 this
function main() {
	console.log(this);
}

// const obj = {
// 	name: "kim",
// 	main: main,
// 	smallObj: {
// 		name: "small",
// 		main: main,
// 	},
// };

// obj.main();
// obj.smallObj.main();
// mainBind();

// this가 가리키는 객체를 내가 원하는 객체로 지정하기 위해서 사용하는 문법 bind
const mainBind = main.bind(10); // 10을 넣으면 기본자료형의 원형이 되는게 자동으로 객체로 들어간다...?
mainBind();

const obj = {
	name: "main",
	main: function () {
		console.log(this);
	},
};

obj.main(); // this는 obj라는 객체를 가리킴

// 화살표를 썼을 때?
const sub = () => console.log(this);
const subBind = sub.bind({});
subBind(); // 여전히 window 객체를 가리킴
// 내부적으로 this가 없음. 근데 왜 this가 출력되는가?
// 자신이 속해있는 컨텍스트의 this를 빌려옴.
// 거래서 bind가 안 먹힘

// 일반 함수는 자체적으로 this를 가지고 있음. bind가 먹힘
// 화살표함수는 자체적으로 this가 없음. 그래서 bind가 안 먹힘

const exobj = {
	name: "sanga",
	main: function () {
		console.log(this); // 이거나
		const sub = () => console.log(this); // 이거나
		sub(); // 둘다 똑같음
	},
};

exobj.main();

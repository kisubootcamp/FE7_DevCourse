// 프로토타입
// 모든 함수에는 함수와 1대1로 매칭되는 프로토타입이라는 객체가 존재한다.
function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
	// this.drive = function () {
	// 	return `This Car model is ${this.model}, ${this.year}.`;
	// };
	this.test = () => {
		console.log(this);
	};
}
// 화살표함수에 this가 없지만 new Car로 선언을 해서 Car가 this가 됨
// 하지만????????????????????????????????????????? this가 지정되는 상황에선 그냥 화살표함수를 피하세요

// 인스턴스 객체에 drive 매서드 숨기기? 프로토타입으로 직접 넣기
Car.prototype.drive = function () {
	return `This Car model is ${this.model}, ${this.year}.`;
};
// 화살표 함수를 사용하면 this.를 사용할 수 없음.
// 이렇게 쓰면 화살표함수는 this가 없기 때문에 window를 this로 생각함. window 객체에는 지금 model이랑 따로 지정을 안해슴
// Car.prototype.drive = () => {
// 	return `This Car model is ${this.model}, ${this.year}.`;
// };
Car.prototype.author = "sanga";

const myCar1 = new Car("KIA", "sorento", "2025");
const myCar2 = new Car("Hyundai", "kesper", "2025");
const myCar3 = new Car("Benz", "GLS", "2025");

// dir 객체의 속성을 계층적으로 출력해주는 메서드
console.dir(myCar1); // [[prototype 열어보면 drive function 보임]]
console.dir(myCar2);
console.dir(myCar3);

console.dir(myCar1.drive()); // 없는게 아니고 hidden 속성을 가져오는거라 출력이 됨. 인스턴스 객체에 존재하지 않는 속성을 `프로토타입 체이닝`을 통해 자신의 생성자 함수와 연결하여 갖고오기? 참조?

// 프로토타입을 직접 접근하는 방법이 있따꼬!!!
console.dir(myCar1.__proto__);
console.dir(myCar1.__proto__.drive()); // drive를 호출한 객체가 프로토타입객체라서 다른 속성이 업슴. 그래서 undefined가 나옴
// 프로토타입 객체의 경우 constructor가 무조건 이씀
// 원래는 __proto___ 쓰는게 정석 문법인데, 자바스크립트에서 __proto__밑의 것을 써도 알아서 프로토타입 밑에거라고 자동으로 프로토타입체이닝해서 실행해줌

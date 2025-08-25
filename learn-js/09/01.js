function Person() {}
console.dir("dd");
// 숫자열 문자열은 Log와 차이가 없음
// 배열이나 함수 넣으면 펼침 가능(화살표) = 객체구나
console.dir(Person);
console.dir(Person.prototype);

// 복습
// (2) 생성자 함수
// 2-1. 함수로 객체를 정의하는 방법
// 2-2. new 키워드 + 함수
// 2-3. [[prototype]](내부 slot) 속성을 가지면 누군가의 인스턴스 객체
// 2-3-1. [[]]는) 자신을 생성한 생성자 함수의 프로토타입 객체를 참고 == 누구에 의해 생긴 인스턴스 객체인지 추적 가능?

// 2-2. 일반 함수의 this = 자신을 호출한 객체 : 함수를 어덯게 누가 호출하느냐에 따라 다름
// 2-3. 화살표 함수의 this = 자신의 상위 스코프의 this를 참조 = People 함수 실행 컨텍스트 내부에 정의된 것
// 화살표 함수보다 일반 함수를 통해 this를 사용하자 (선호)
function People() {
  (this.name = "park"), (this.age = 20), console.log(this);
}
const p1 = new People(); //{}.people()
const p2 = new People(); //{}.people()
console.dir(p1);
console.dir(p2);

// 참고 : 객체의 특성
const obj = {
  name: "park",
};
obj.name = "kim"; // 이미 존재하는 속성이면 값 변경
obj.age = 20; // 동적 속성 추가 :: 존재하지 않은 속성일 때
delete obj.name; // 동적 속성 삭제

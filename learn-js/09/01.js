/*

생성자 함수
1. 함수로 객체를 정의하는 방법
2. new 키워드 + 함수
3. [[Prototype]]이라는 객체가 있으면 -> 인스턴스 객체
   자신을 생성한 생성자 함수의 prototype을 [[prototype]]으로 참조함
4. 함수는 1급 객체이기 때문에 prototype이라는 속성을 가질 수 있음
   => 이를 통해 상속 구현

*/

function Person() {
  console.log(this);
}

Person(); // 일반 함수 호출
new Person(); // => {}.Person();

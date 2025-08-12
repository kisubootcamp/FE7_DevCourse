// 함수 실행컨텍스트 - 자바 스크립트 코드가 함수 내부에서 실행되는 환경

const num = 10;
function printNum() {
  console.log(num); // 20
}
printNum();
console.log(num); //10

/*
const는 중복선언이 아니지만, 컨텍스트가 다르다면 다시 선언 가능
printNum 함수의 내부와 외부는 서로 다른 스코프를 가짐
첫번째 전역 스코프에서의 num과 두번째 함수 스코프 내의 num은 중복 선언으로 인한 오류가 발생하지 않음
*/

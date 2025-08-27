/*

함수를 매개변수로 받아서 사용하는 함수 => 콜백 함수

내부적으로 콜백 함수를 받아서 처리하게 만든 함수가 존재함 => 대표적으로 setTimeout
setTimeout => WEB API, 웹에서 제공하는 함수
API: 어플리케이션 프로그래밍 인터페이스

DOM도 웹 API라서 document.querySelector() 같은 함수도 웹 API로만 사용 가능
Node.js에서 WEB API 몇 가지를 구현해놨는데 그게 setTimeout

*/

setTimeout(() => {
  console.log("1초 뒤에 실행됨");
}, 1000); // 1000ms -> 1s

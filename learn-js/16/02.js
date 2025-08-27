// 자바스크립트 자체적으로 내정되어 있는 API와
// 브라우저가 제공하는 Web API를 구분할 수 있어야 한다.

// 브라우저가 제공하는 Web API의 가장 대장은
// window (객체)
// BOM (Browser Object Model)
// - navigator, screen, location, history, console, alert, document, ...
// document -> DOM (Document Object Model)

// 반면 자바스크립트 자체적으로 내정되어 있는 API의 가장 대장은
// object (객체)
// String, Function, Number, ...

//

// BOM
// window
// alert(message) : 경고창
window.alert("경고창");
console.log("ㅇㅇ");

// comfirm(message) : 확인창
const isDelete = window.confirm("정말 삭제하시겠습니까?");
if (isDelete) {
  console.log("삭제되었습니다.");
}

// prompt(message, default) : 입력창
const name = window.prompt("이름을 입력하세요.");
console.log(name);
if (name !== "kim") {
  window.confirm("정말 kim이 아니세요?") ||
    window.alert("kim이라고 입력하세요.");
}

// setTimeout(func, delay) : 일정 시간이 지난 후에 함수 실행
window.setTimeout(() => {
  console.log("1초 후에 실행");
}, 1000);

// setInterval(func, delay) : 일정 시간마다 함수 실행
let count = 0;
const interval = window.setInterval(() => {
  console.log("1초마다 실행", ++count);
  if (count === 5) {
    window.clearInterval(interval);
  }
}, 1000);

// navigator: 브라우저 정보
console.log(window.navigator);

// screen: 화면 정보
console.log(window.screen);

// location: 현재 페이지 정보
console.log(window.location);
// location.href: 현재 페이지 URL

// 1. 자바스크립트
// 1.1 자바스크립트 자체적으로 내장되어 있는 API
// 1.1.1 object(객체)
// 1.1.1.1 String
// 1.1.1.2 Function
// 1.1.1.3 Number ...

// 1.2 브라우저에서 제공해주는 API
// 1.2.1 window (객체)
// 1.2.1.1 BOM(Browser Object Models)
// 1.2.1.1.1 navigator
// 1.2.1.1.2 screen
// 1.2.1.1.3 location
// 1.2.1.1.4 history
// 1.2.1.1.5 document -> DOM(document object model)

// 1.3 BOM
// 1.3.1 window
// 1.3.1.1 alert(message)
// 1.3.1.2 confirm(message)
// 1.3.1.3 prompt(message,default)
// 1.3.1.4 setTimeout <-> clearTimeout
// 1.3.1.5 setInterval <-> clearInterval

// 1.3.2 navigator
// console.log(window.navigator);

// 1.3.3 screen
// 1.3.3.1 width, height, availWidth, availHeight
// 지금 화면의 규격이 나옴
// console.log(window.screen.width); // 모니터 전체 넓이
// console.log(window.screen.heigth); // 모니터 전체 높이
// console.log(window.screen.availWidth); // 사용 가능한 화면의 넓이
// console.log(window.screen.availheight); // 사용 가능한 화면의 높이

// 1.3.4 location
// 많은 주요 정보들 가지고 있음
// console.log(window.location);
// window.location.href = "URL"
// window.location.assign("URL");
// reload(); 는 새로고침하게 해줌

// window.alert("경고창");

// const confirms = window.confirm("강사님은 잘생겼다");

// const name = window.prompt("비밀번호를 입력하세요");
// console.log(typeof name);

// if (name === "1234") {
//   console.log("성공");
// }

// const timeout = window.setTimeout(() => {
//   console.log("setTimeout");
// }, 1000);
// clearTimeout(timeout);

// let count = 0;
// window.setInterval(() => {
//   console.log(count++);
//   if (count === 5) clearInterval(interval);
// }, 1000);

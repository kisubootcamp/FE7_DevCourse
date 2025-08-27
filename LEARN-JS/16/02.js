// 1. 자바스크립트
// 1.1 자바스크립트 자체적으로 내장되어있는 API
// 1.1.1 Object (객체)
// 1.1.1.1 String, Function, Number...

// 1.2 브라우저에서 제공해주는 API
// 1.2.1 window (객체)
// 1.2.1.1 BOM(Browser Object Models)
// 1.2.1.1.1 navigator
// 1.2.1.1.2 screen
// 1.2.1.1.3 location
// 1.2.1.1.4 history
// 1.2.1.1.5 document -> DOM(Document Object Model)

// 1.3 BOM
// 1.3.1 window
// 1.3.1.1 alert(message)
// 1.3.1.2 confirm(message)
// 1.3.1.3 prompt(message, default)
// 1.3.1.4 setTimeout <-> clearTimeout
// 1.3.1.5 setInterval <-> clearInterval

// 1.3.2 navigator
// console.log(navigator);

// 1.3.3 screen
// 1.3.3.1 width, height, availWidth, availHeight
// 1.3.3.2 availWidth, availHeight: 주소표시줄, 상단바, 독...
// console.log(window.screen.width);
// console.log(window.screen.height);
// console.log(window.screen.availWidth); // 사용 가능한 화면의 넓이
// console.log(window.screen.availHeight); // 사용 가능한 화면의 높이

// 1.3.4 location
// console.log(window.location);
// window.location.href = 'https://sucoding.kr';
// window.location.assign('https://sucoding.kr');
window.location.reload();

// window.alert('경고창');
// const confirms = window.confirm('강사님은 잘생겼다');
// console.log(confirms);
// const name = window.prompt('너의 이름은?');
// console.log(name);
// const timeout = window.setTimeout(() => {
//   console.log('setTimeout');
// }, 1000);
// clearTimeout(timeout);
// const timeout2 = window.setTimeout(() => {
//   console.log('setTimeout');
// }, 1000);
// clearTimeout(timeout2);
// let count = 0;
// const interval = setInterval(() => {
//   console.log(count++);
//   if (count === 5) clearInterval(interval);
// }, 1000);

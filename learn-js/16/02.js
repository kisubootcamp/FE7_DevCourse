/*

자바스크립트 자체적으로 내장되어있는 API
가장 최상위는 Object (객체) -> String, Function, Number... 파생

브라우저에서 제공해주는 API => fetch, DOM...
가장 최상위는 window (객체)
-> window 안에 BOM(Browser Object Models)
-> 안에 세부적으로 navigator, screen, location, history, document...

document => DOM(Document Object Model)

*/

// BOM
// 1. alert (message): 창이 뜨는 동안 브라우저가 멈춘 것처럼 보이지만 내부적으로는 동작함
// 2. confirm (message): 확인과 취소가 선택 가능 -> 선택 결과가 리턴됨

const confirms = window.confirm("확인");
console.log(confirms);

// alert, confirm은 모양이 커스텀 되지 않음
// 최근엔 모달을 이용하는 추세

// 3. prompt(message, default)

// 4. setTimeout <-> clearTimeout

const timeout = window.setTimeout(() => {
  console.log("setTimeout");
}, 1000);

clearTimeout(timeout);

// 5. setInterval <-> clearInterval
// 일정한 ms마다 실행할 때 사용

// navigator
// 유저의 브라우저 정보를 담고 있는 객체

// screen (유저의 화면): width, height, availWidth, availHeight
// avail -> 사용 가능한 화면 (주소 표시줄, 상단바 등이 빠짐)

// location
// 유저의 URL에 대한 정보

location.href = "주소"; // 이동
location.assign("주소"); // 이동
location.reload(); // 새로고침

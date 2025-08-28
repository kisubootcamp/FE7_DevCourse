// 1.자바스크립트
// 1.1 자바스크립트 자체적으로 내장되어있는 API
// 1.1.1 object(객체) : 대장
// ㄴ String, Function, Number 등이 파생

// 1.2 브라우저에서 제공해주는 API
// 1.2.1 window(객체) : 브라우저 제공 API의 정점 (대장)
// ㄴ BOM(Browser Object Models)
// ㄴㄴ 그 안에 navigator, screen, location, history, document, DOM, document object model)
// 즉 window > BOM > DOM, navigator ... 의 하위 개념


// 1.3 BOM

// 1.3.1 window와 (window와 navigator를 동의 개념으로 보기도 함) (?)
// 아래 모든 애들은 window. 생략 가능 (브라우저 실행 전제 조건 있다면) -> 조직에 따라 다를 듯 (일관성만 지키면 뭐든 상관 없다)
// 1.3.1.1 alert(message)
window.alert("경고창");
console.log("dd"); // 동작이 멈췄을 것이라고 생각되지만, 내부에서는 돌고 있음, 둘이 그냥 각자 도는 느낌?
// 1.3.1.2 confirm
// ㄴ 물어보고, 사용자가 취소/확인울 누르게 함
const confirms = window.confirm("강사님 잘생겼다"); // 결과가 변수에 넘어감
console.log(confirms);
// 큰 단점 : alert, confirm 은 디자인 커스터마이징이 안 됨
// 1.3.1.3 prompt
const name = window.prompt("이름?");
// ㄴ 사용자가 답변을 입력 가능, 결과가 변수에 넘어감
// 1.3.1.4 setTimeout
// ㄴ clearTimeoit 과 함께 사용 권장
const timeout = window.setTimeout(() => {console.log("setTimeout");}, 1000);
// 1.3.1.5 setInterval
// ㄴ clearInterval 과 함께 사용 권장
// 일회성인 setTimeout과 달리 특정 밀리세컨드마다 일정 코드를 반복하고 싶을 때 사용,
// 일정시간마다 정보를 계속 넣거나 하는 반복 작업을 수행할 때 사용
let count = 0;
const interval = window.setInterval(() => {
  console.log(count++);
  if (count === 5) clearInterval(interval);
 }, 1000);

 // 1.3.2 navigator
 console.log(window.navigator);
 // 다양한 브라우저 정보를 담고 있음, 하나만 지정해서 볼 수도 있음(.~를 붙여서), 예를 들면 어떤 브라우저 사용, 어떻게 접근 등

 // 1.3.3 screen
 // ㄴ 사용자가 사용하는 화면에 대한 정보를 담은 객체
 // 1.3.3.1 width, height, availWidth, availHeight(속성)
 console.log(window.screen.width);
 console.log(window.screen.height);
 console.log(window.screen.availWidth);
 console.log(window.screen.availHeight);
 // availwidth, availHeight :: 사용 가능한 너비, 주소표시줄, 상단바 등이 빠진 넓이

 // 1.3.4 location
 // ㄴ url에 대한 정보를 담은 객체
  console.log(window.location);
  window.location.href = "http://naver.com"; // 그 주소로 이동됨
  window.location.reload

  // 1.3.5 history
  // 나중에
  
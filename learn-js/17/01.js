// 1. 이벤트
// 1.1 브라우저에서 발생하는 사용자 상호 작용을 의미
// ㄴ 뭔가 클릭, 포커싱, 키보드 입력, 화면 스크롤 등등

// 2. 이벤트 주요 구성 요소
// 2.1 이벤트 타켓, 이벤트 타입, 이벤트 핸들러
// 이벤트 핸들러 : 이벤트 발생 시 실행할 함수

// 3. 이벤트 등록
// 3.1 addEventListener(이벤트타입, 이벤트핸들러, 옵션(객체))

// 모든 문서 객체가 모든 이벤트 타입을 사용 가능한 것은 아님 (예. 버튼에 키보드 이벤트를 걸면 실행이 안 됨) 
// mouseover, mouseout -> 사용 지양, 오늘 날 더 사용 x / mouseenter, mouseleave로 대체해서 사용

/*
<body>
<h1>이벤트</h1>
<button>클릭</button>
<script>
// 이벤트 타겟
const target = document.querySelector("button");

// 이벤트 타입
// ㄴ mdn : Element > event 에 있는 것이 전부 이벤트 타입
target.addEventListener("click", function () {
  console.log("클릭됨");
  });
  </script>
  </body>
  */
 
// 하나의 문서 객체에 여러 이벤트 타입 담을 수 있으나, 체이닝 안 되므로 따로 걸기
 /*
    target.addEventListener("mouseenter", function () {
      console.log("mouseenter");
    });

    target.addEventListener("mouseleave", function () {
      console.log("mouseleave");
    });
 */

// 이벤트 지우기 : removeEventListener("이벤트타입",변수명)
// ㄴ 참조값 필요해서, 변수 만들어서 넣어서 사용
 
// 화살표 함수 사용 가능? : 내부에서 this 사용하지 않을 때면 사용 가능


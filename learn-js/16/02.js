  // 1.3.6 DOM (Ddocument Object Model)
  // 문서 객체를 제어하기 위한 모델 (표준) (유일한 방법)
  // 문저 객체에 접근할 수 있게 수단과 방법을 제공해주는 것 = DOM
  // 문서 객체 :: 웹 브라우저에 표시되는 HTML을 자바스크립트가 이해할 수 있는 객체 형태로 변환한 것

  // (0)

  // DOM 핵심
  // 문서 객체의 선택과 제어
  // ㄴ 뭘 제어하고 싶은가, 그리고 어떻게 선택하는지

  // DOM Visualizer
  // ㄴ dom tree :: 웹브라우저가 html, css 코드를 파싱해서 만든 자료 구조?
  // ㄴ 원 하나하나를 노드 라고 함, 개별 코드 하나하나를 노드라고 함, 그걸 원 하나로 만들어 트리를 만듦
  // 이미지에 없지만 html 위에 documnet라는 최상위 노드와 documnet로부터 나온 DOCTYPE과 HTML이 있다 

  // 노드(Node)
  // :: DOM에서 모든 구성 요소를 통칭하는 단위, DOM 트리를 구성하는 핵심 구성요소
  // ㄴ 종류 : 색 별로 다르게 표현되고 있다
  // 문서 노드 -> document : html위에 documnet라는 최상위 노드
  // 요소 노드 -> div, p, a ...
  // 속성 노드 -> id="title", class="box"
  // 텍스트 노드 -> "안녕하세요.", "강사님 잘생김"
  // 주석 노드 -> <!-- -->


  // (1) 문서 객체 선택법

  // 1.1 getElement... :: 태그들의 의미 정도 알기
  // 1.2 querySelector... :: 권장
  // ( index.html 에서 퍼옴 )
    // css에서 id는 고유해야 하는 이유 : 스타일 적용에는 문제가 없지만(다적용됨) 문서 객체 선택에 문제가 생김(하나만선택됨)
    // ㄴ 오늘날 : querySelector(하나찾기), querySelectorAll(여러개찾기) 
    // ㄴ css 선택자 문법을 그대로 쓸 수 있음 (대부분의 선택자 가능)
    const el2 = document.querySelector("h1");
    const el3 = document.querySelector("#title");
    const el4 = document.querySelector("h1#title");
    const el5 = document.querySelectorAll(".red");
    const el6 = document.querySelectorAll("div > h1");
    // 편리한데 퍼포먼스 꽝임, 편리하지만 내부 연산처리가 많아져 성능이 나빠질 수 있음 (직접 받는게 아니라 selector라는 매개변수로 받음)
    // ㄴ 결론 : 그래도 오늘 날에는 그 나빠지는 성능 차이(get과의)가 미비하기 때문에 query를 쓰면 됨

    // html collection, nodelise(forEach 사용가능) :: 둘 다 유사배열객체
    // 1.3 document.forms :: form을 선택할 때는 좀 다르다 (강의노트 참고)


  // (2) 문서 객체 탐색
  // ㄴ 교양 수업처럼 듣기..?

  // 2.1 부모, 자식, 형제 노드의 탐색 속성 (모든 요소 기준 탐색)
  // 2.1.1 parentNode
  // 2.1.2 childNodes
  // 2.1.3 firstChild
  // 2.1.4 lastChild
  // 2.1.5 previousSbling
  // 2.1.6 nextSibling

  // 2.2 요소 전용 탐색 (요소 노트 기준 탐색, 노드 간의 관계를 이용)
  // 2.2.1 children
  // 2.2.2 firstElmentChild
  // 2.2.3 lastElementChild
  // 2.2.4 previousElementSbling
  // 2.2.5 nextElementSibling

  // (3) 문서 객체 조작 
  // ㄴ 강의 노트 참고 (실무 많이 쓰는거 위주)
  // 3.0 [문서객체]...

  // 3.1 스타일 변경
  // 3.1.1 [문서객체].style.[css속성명] = "값";

  // 3.2 속성 추가
  // 3.2.1 [문서객체].setAttribute(속성명, 속성값);

  // 3.3 속성 제거
  // 3.3.1 [문서객체].removeAttribute(속성명);

  // 3.4 속성 가져오기
  // 3.4.1 [문서객체].getAttribute(속성명);

  // 3.5 클래스 속성 전용(class) 조작
  // 3.5.1 classList
  // 3.5.1.1 add()
  // 3.5.1.2 remove()
  // 3.5.1.3 toggle()
  // 3.5.1.4 contains()

  // 3.6 콘텐츠 조작
  // 3.6.1 innerHTML
  // 3.6.2 innerText

  // 3.7 태그 생성
  // 3.7.1 createElement(태그명)

  // 3.8 기존 돔 트리와 연결
  // 3.8.1 appendChild() 기존 요소의 자식으로 추가
  // 3.8.2 insertBefore() 부모 요소의 특정 노드 앞에 추가

  // 3.9 삭제
  // 3.9.1 remove()
  
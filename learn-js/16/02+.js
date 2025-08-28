// 강사님 버전

// DOM (Document Object Models), document
// 문서 객체를 제어하기 위한 모델
// 문서 객체? 웹 브라우저에 표시되는 HTML을 자바스크립트가 이해할 수 있는 객체 형태로 변환한 것을 말함

// DOM 핵심
// 문서 객체의 선택과 제어.

// 노드(Node)
// DOM에서 모든 구성 요소를 통칭하는 단위
// DOM 트리를 구성하는 핵심 구성요소

// 문서 노드 -> document
// 요소 노드 -> div, p, a ...
// 속성 노드 -> id="title", class="box"
// 텍스트 노드 -> "안녕하세요.", "강사님 잘생김"
// 주석 노드 -> <!-- -->

// 1. 문서 객체의 선택
// 1.1 getElement....
// 1.2 querySelector... -> 오늘날 권장
// 1.3 document.forms -> form 요소를 선택할 때 종종 사용합니다.

// 2. 문서 객체 탐색
// 2.1 부모, 자식, 형제 노드 탐색 속성
// 2.1.1 parentNode
// 2.2.2 childNodes
// 2.2.3 firstChild
// 2.2.4 lastChild
// 2.2.5 previousSbiling
// 2.2.6 nextSibling

// 2.2 요소 전용 탐색
// 2.2.1 children
// 2.2.2 firstElementChild
// 2.2.3 lastElementChild
// 2.2.4 previousElementSibling
// 2.2.5 nextElementSibling

// 3. 문서 객체 조작
// 3.0 [문서객체].***

// 3.1. 스타일 변경
// 3.1.1. [문서객체].style.[CSS속성명] = 값

// 3.2. 속성 추가
// 3.2.1 [문서객체].setAttribute(속성명, 속성값);

// 3.3. 속성 제거
// 3.3.1  [문서객체].removeAttribute(속성명);

// 3.4 속성 가져오기
// 3.4.1 [문서객체].getAttribute(속성명)

// 3.5 클래스 속성 전용(class) 조작
// 3.5.1 classList
// 3.5.1.1 add()
// 3.5.1.2 remove()
// 3.5.1.3 toggle()
// 3.5.1.4 contains()

// 3.6 콘텐츠 조작
// 3.6.1 innerHTML
// 3.6.2 innerText

// 3.7 태그를 생성
// 3.7.1 createElement(태그명)

// 3.8 기존 돔 트리와 연결
// 3.8.1 appendChild() 기존 요소의 자식으로 추가
// 3.8.2 insertBefore() 부모 요소의 특정 노드 앞에 추가

// 3.9 삭제
// 3.9.1 remove()

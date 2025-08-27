// DOM (Document Object Models)
// window 객체의 하위 객체. document
// 모든 DOM은 document로부터 시작함

// 문서 객체를 제어하기 위한 모델
// 문서 객체가 모냐? -> 웹브라우저에서 표시되는 html을 js가 이해할 수 있는 객체 형태로 변환한 것

// DOM의 핵심
// 문서 객체를 선택과 제어

// DOM은 결국 문서 객체를 제어하기 위함.

// 노드(Node)
// DOM에서 모든 구성 요소를 통칭하는 단위
// DOM 트리를 구성하는 핵심 요소라고 생각하면 됨

// 문서 노드 -> document
// 요소 노드 -> div, p, a ...
// 속성 노드 -> id="title", class="box"
// 텍스트 노트 -> "안녕하세요.", ...
// 주석 노드 -> <!-- -->

// 1. 문서 객체의 선택
// 1.1 getElement...
// 1.2 querySelector... (오늘날 권장)
// 1.3 document.forms   (form 요소 선택할 때 종종 사용)

// 2. 문서 객체
// 2.1 부모, 자식, 형제 노트 탐색 속성
// 2.1.1 parentNode
// 2.1.2 childNodes
// 2.1.3 firstChild
// 2.1.4 lastChild
// 2.1.5 previousSibiling
// 2.1.6 nextSibling

// 2.2 요소 노드로만 탐색
// 2.2.1 children
// 2.2.2 firstElementChild
// 2.2.3 lastElementChild
// 2.2.4 previousElementSibling
// 2.2.5 nextElementSibling

// 3. 문서 객체 조작
// 3.0 [문서객체].
// 3.1 스타일 변경
// 3.1.1 [문서객체].style.[css속성(카멜케이스로 접근)] = "값"
// 3.2 속성 추가
// 3.2.1 [문서객체].setAttribute("속성명", "속성값")
//       -> 기존의 속성 값을 보존하는게 아니라 덮어버림.
//          그래서 기존 속성값도 보존하고 싶을 경우 기존값도 함께 작성
//          ex) setAttribute("class", "red big")
// 3.3 속성을 제거
// 3.3.1 [문서객체].removeAttribute("속성명", "속성값")
// 3.4 속성 가져오기
// 3.4.1 [문서객체].getAttribute("속성명")

// 3.5 클래스 속성 전용(class) 조작
// 3.5.1 추가: [문서객체].classList.add("클래스명")
// 3.5.2 삭제: [문서객체].classList.remove("클래스명")
// 3.5.3 토글: [문서객체].classList.toggle("클래스명")
// 3.5.4 확인: [문서객체].classList.contains("클래스명")    => boolean

// 3.6 콘텐츠 조작
// 3.6.1 [문서객체].innerHTML = 태그 내부의 #text에 html로 입력됨
// 3.6.2 [문서객체].innerText = 태그 내부의 #text에 텍스트로 입력됨

// 3.7 태그를 생성
// 3.7.1 document.createElement(태그명)
// 꼭 createElement로 문서객체 선언하고 추가할 수 있는지??

// 3.8 기존 돔트리 연결, 추가하기
// 3.8.1 [부모문서객체].appendChild(객체)
// 3.8.2 [부모문서객체].insertBefore(새문서객체, 앞 기준객체)

// 3.9 삭제
// 3.9.1 [삭제하고싶은 문서객체].remove()
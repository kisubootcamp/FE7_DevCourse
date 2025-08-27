/*

DOM (Document Object Models): 문서 객체를 제어하기 위한 모델
문서 객체 =>웹 브라우저에 표시되는 HTML을 자바스크립트가 이해할 수 있는 객체 형태로 변환한 것
DOM 핵심: 문서 객체의 선택과 제어

Node: DOM이 파싱된 후 구성 요소를 통칭하는 단위

문서 노드: document
요소 노드: div, p, a...
속성 노드: id="title", class="box"
텍스트 노드: "text"
주석 노드: <!-- -->

문서 객체 선택
1. getElement
2. querySelector
-> getElement가 성능은 더 좋지만 요즘은 querySelector가 더 편해서 많이 씀
3. document.forms
가끔 form 선택을 위해 씀

문서 객체 탐색
1. 부모, 자식, 형제 노드 탐색 속성
parentNode, childNodes, firstChild, lastChild, previousSbiling, nextSibling

2. 요소 전용 탐색
children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling

3. 문서 객체 조작
스타일 변경: style
속성 추가: setAttribute
속성 제거: removeAttribute
속성 갖고 오기: getAttribute
클래스: classList -> add, remove, toggle, contains

4. 콘텐츠 조작
innerHTML, innerText

5. Element 생성
createElement

6. 기존 DOM과 연결
appendChild: 자식 추가
insertBefore: 특정 노드 앞에 추가

6. 삭제
remove()

*/

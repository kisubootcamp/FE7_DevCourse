// DOM , document
/*
문서 객체를 제어하기 위한 모델
문서객체? 웹 브라우저에 표시되는 HTML을 자바스크립트가 이해할 수 있는 객체 형태로 변환한 것

DOM의 핵심
문서 객체의 선택과 제어

노드(Node)
DOM에서 모든 구성 요소를 통칭하는 단위
DOM 트리를 구성하는 핵심 요소

문서 노드 -> document
요소 노드 -> div, p, a ...
속성 노드 -> id="title", class="box"
텍스트 노드 -> "안녕하세요"
주석 노드 -> <!-- -->

1.문서 객체의 선택
    getElement..
    querySelector... -> 오늘날 권장
    document.form -> form 요소를 선택할 때 종종 사용

2.문서 객체 탐색
    ㄴ 부모, 자식, 형제 노드 탐색 속성
        parentNode
        childNodes
        firstChild
        lastChild
        previousSbiling
        nextSibling
    
    ㄴ 요소 전용 탐색
        children
        firstElementChild
        lastElemnetChild
        previousElementSibling
        nextElementSibling

3.문서 객체 조작
    - 스타일 변경
        [문서객체].style.[CSS속성명] = 값
            ex) liEl.style.color = "red";

    -   속성 갱신 (기존 값은 삭제)
            [문서객체].setAttritube(속성명, 속성값);

    -   속성을 제거
            [문서객체].removeAttritube(속성명);

    -   속성 가져오기
            [문서객체].getAttritube(속성명)

    -   클래스 속성 전용 조작
        classList
            add()
            remove()
            toggle()
            contains()

    -   콘텐츠 조작
        innerHTML
        innerText

    -   태그를 생성
        createElement(태그명)

    -   기존 돔 트리와 연결
            appenChild() -> 기존 요소의 자식으로 추가 , 무조건 맨 마지막에 들어감
            insertBefore() -> 부모 요소의 특정 노드 앞에 추가

    -   삭제
            remove()


*/

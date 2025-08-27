## 자바스크립트 틀

#### 자바스크립트 자체적으로 내장되어 있는 API

- object(객체)

  - String
  - Function
  - Number ...

#### 브라우저에서 제공해주는 API

- window (객체)
  - BOM(Browser Object Models)
    - navigator
    - screen
    - location
    - history
    - document -> DOM(document object model)

#### Bom

- window

  - alert(message)
    ```
    window.alert("경고창");
    // 앞으로 나오는 메서드는 다 이런 식으로 씀
    ```
    - 경고창이 나오는 것
  - .confirm()
    - yes or no choose
  - .prompt
    - 예로 인증할 때 쓰였던 것
    - 입력하는 창이 나오는 것
  - setTimeout <-> clearTimeout
  - setInterval <-> clearInterval
    - 특정 작업을 반복수행 시킬 때 쓰는 것(뒤에 밀리세컨드로 반복 시간도 설정 가능)

- navigator

  - 브라우저에 대한 정보가 다양한 속성으로 제공됨

- screen

  - width, height, availWidth, availHeight
  - 지금 화면의 규격이 나옴
  - avail 안 붙은 width, height은 실제 모니터 넓이와 높이
  - 붙은 건 사용 가능한 넓이와 높이

- location
  - 많은 주요 정보들 가지고 있음
  - URL 제어 가능(사이트 옮겨주는 것)
    ```
    window.location.href = "URL"
    window.location.assign("URL");
    ```
  - reload() 같은걸로 새로고침도 하게 할 수 있음

#### DOM (Document Object Models), document

- 문서 객체를 제어하기 위한 모델
- 문서 객체? 웹 브라우저에 표시되는 HTML을 자바스크립트가 이해할 수 있는 객체 형태로 변환한 것을 말함

- 노드

  - DOM에서 모든 구성 요소를 통칭하는 단위
  - DOM 트리를 구성는 핵심 구성요소

  - 노드 구성요소
    - 문서 노드 -> document(트리의 최상위에 존재)
    - 요소 노드 -> div, p, a ...
    - 속성 노드 -> id="title", class = "box"
    - 텍스트 노드 -> "안녕하세요", "강사님...?"
    - 주석 노드 -> <!-- -->

- 문서 객체의 선택
  - get\*\*\*\*
    - document.getElementByID() : 여러 Id가 있으면 안 나올 수도 있음, 일단은 하나만 나옴(id 특성) 말 그대로 단수
    - document.getElementsByClassName() : 보면 복수개념, 여러개를 반환해줌(같은 클래스 이름은 다 반환)
  - query\*\*\*\* -> 이걸 권장
    - 얘는 "h1", ".red" 이런 식으로 요소나 아니면 css 안에 들어간 내용이나 "div > h1" 이런 식으로도 가능함(css 선택자로 고를 수 있음)
    - querySelector() : 단수
    - querySelectorAll() : 복수(NodeList로 찾아짐)
    - 성능에 좋지 않음
  - form
    - 폼 태그에 대한 것을 쓸 때는 이게 편함
    - document.forms["찾고자 하는 것"]
    - form.찾고자 하는 요소.value 이런 식으로도 쓰임

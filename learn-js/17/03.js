// history
// 브라우저의 세션 기록(뒤로가기, 앞으로 가기, 주소 ) 등을 제어할 수 있게 해주는 API
// SPA(Single Page Application)

// length -> 브라우저에서 관리하고 있는 히스토리 갯수
// .back() -> 뒤로가기
// .forward() -> 앞으로 가기
// .go(n) -> n 만큼 이동하기(양수 = 앞으로, 음수 = 뒤로)
// .pushState(state, title, url) -> 페이지 이동시키는 능력은 없음, 내가 가지는 히스토리만 조작하는 것, 뒤로가기 가능
// - 보통 상태(state)는 객체로
// replaceState(state, title, url) -> 현재 히스토리를 조작하는 것, 뒤로가기 불가능

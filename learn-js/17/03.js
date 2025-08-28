//history
/*
브라우저의 세션 기록(뒤로가기, 앞으로 가기, 주소) 등을 제어할 수 있게 해주는 API
SPA(Single Page Application)

length() ->브라우저에서 관리하고 있는 히스토리 갯수
.back() -> 뒤로가기
.forward() -> 앞으로 가기
.go() -> n만큼 이동하기(양수 = 앞으로, 음수 = 뒤로)
.pushState(state, title, url) : a -> b -> (pushState 실행) -> c -> 뒤로가기 누르면 b로 이동
.replaceState(state, title, url) : a -> b -> (replaceState실행) -> c -> 뒤로가기 누르면 a로 이동
*/

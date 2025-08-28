// 추가 내용 (심화)

// history
// ㄴ url 방문의 역사
// 브라우저의 세션 기록 (뒤로가기, 앞으로 가기, 주소) 등을 제어할 수 있게 해주는 API
// SPA(Single Page Application) : 하나의 페이지에서 이루어지는 것 (새페이지 열리는게 아니고)
// ㄴ 실제 페이지는 하난데 여러 페이지 처럼 보이는 애플리케이션

//window.history.length //6 
// 하나의 브라우저에서 url 6번을 왔다갔다 한게 쌓임

//history.back(); 
// 뒤로가기, 이전 url(history)로 돌아감
//history.forward(); 
// 앞으로가기
// 둘 다 앞 혹은 뒤 history가 있어야 동작 (가진 history를 기반으로 하므로)

//history.go(n)
// n만큼 이동, 양수는 앞으로 음수는 뒤로
// 예. n = 3 : 앞으로 3번 이동, n = -6 : 뒤로가기 6번

//history.pushState(state, title, url)
// ({}, null, '/page2)
// 새로운 history를 넣음,, 이동은 아니고, 가진 히스토리를 조작, 기존에 추가하는거라 뒤(앞)로가기 가능

//history.replaceState(state, title, url)
// 현재 history 조작, 뒤로가기 불가능

// 05.html -> 1차 프로젝트할 때 참조

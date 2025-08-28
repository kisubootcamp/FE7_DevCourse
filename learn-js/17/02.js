// 태스크 큐, 마이크로 태스크 큐
/*
태스크 큐
    ㄴ setTimeout, setInterval, setImeediate, DOM 이벤트 콜백, fetch()...

마이크로 태스크 큐
    ㄴ promise.then, catch, finallyd
*/
console.log("start");

//setTimeout도 함수
//setTimeout 의 함수 실행 컨텍스트는 어디로 가는가?
//웹 브라우저의 실행 컨텍스트로 이동하게 된다 (setTimeout의 주체는 웹이 됨, 웹API이기 때문.)
//이후 태스크 큐로 들어감 (콜스택이 비워질 때 까지 대기)
//콜스택이 비워졌을 때, [이벤트 루프]에 의해 콜스택으로 다시 돌아간다
//마이크로 콜스택이 남아있다면 대기한다
setTimeout(() => {
  console.log("setTimeout");
}, 0);

//promise 역시 JS 콜스택에서 실행컨텍스트 제거 이후, 웹 브라우저의 실행 컨텍스트로 위임한다
//이후 마이크로 태스크 큐로 들어감
//태스크 큐보다 먼저 콜스택으로 들어간다.
//Web API => 마이크로 태스크 큐 => 이벤트 루프=> 콜스택 으로 이동하는 형식
Promise.resolve().then(() => {
  console.log("promise");
});
console.log("end");

// Promise 객체 (ES6)
// 비동기 작업을 처리할 때 사용할 수 있는 매커니즘
// ES6 이전에는 비동기 작업을 처리하는 방법으로 콜백 함수밖에 없었음
// 콜백 함수는 콜백이 중첩되면 코드가 복잡해지고 가독성이 떨어지는(콜백 지옥) 패턴이 생기게 됨

// Promise의 상태
// pending(작업이 실행 중), fulfilled(작업이 완료됨), reject(작업이 실패됨)

// Producer (생산자)
// Promise 객체를 생성하고 정의하는 부분을 일컫는다

const promise = new Promise((resolve, reject) => {
    // 작업이 성공하면 resolve 호출
    // 작업이 실패하면 reject 호출
    console.log("promise created");
    setTimeout(() => {
        // resolve("task1");
        reject("실패함");
    }, 1000)
});

console.log(promise); // pending 상태

// Consumer (소비자)
promise.then((value) => {
        console.log(value);
        console.log("task2");
    },
    (reason) => {
        console.log(reason);
    }
)
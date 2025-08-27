// ES5
// 콜백함수
// ES6
// Promise 객체
// ES7
// async.await (syntatic sugar)

function fetchNumber() {
    return new Promise((resolve) => resolve(2));
}

async function fetchNumber() {
    return 2;
}

fetchNumber()
.then(console.log);

// 프로미스 객체를 만드는 이유: 비동기 흐름을 제어하기 위함.
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchNumbers() {
    return delay(2000)
    .then(() => 2);
}
async function fetchNumbers() {
    await delay(2000); // code stop
    return 2;
}
fetchNumbers()
    .then(console.log);
// ES5
// 콜백 함수
// ES6
// Promise 객체
// ES7
// async.await (syntactic sugar)

const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

async function fetchNumber() {
  await delay(5000);
  return 2;
}

fetchNumber().then(console.log);

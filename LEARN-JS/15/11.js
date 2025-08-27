// ES5
// 콜백함수
// ES6
// Promise 객체
// ES7
// async.await (syntatic sugar)

const dealy = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchNumber() {
  await dealy(5000); // stop
  return 2;
}

fetchNumber() //
  .then(console.log);

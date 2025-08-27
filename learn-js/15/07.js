// ES5 - 콜백 함수
// ES6 - Promise 객체
// ES7 - async/await (문법적 설탕)

function fetchNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(2), 1000);
  });
}
async function fetchNumber() {
  return 2;
}

fetchNumber().then(console.log);

//

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchNumber2() {
  return delay(2000).then(() => 2);
}

async function fetchNumber2() {
  await delay(2000);
  return 2;
}

fetchNumber2().then(console.log);

// ES5 -> 콜백 함수
// ES6 -> Promise 함수
// ES7 -> async.await (syntatic sugar)

// 애를
function fetchNumber() {
  return new Promise((resolve) => resolve(2));
}
// 이렇게 바꿀 수 있움
async function fetchNumber() {
  return 2;
}
// 둘은 완전히 같다

// await
const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms));
async function fetchNumbers() {
  //return delay(2000).then(() => 2);
  // await의 조합이 가독성이 좋다 -> 이해하기 더 쉽고 짧아짐
  await dealy(2000); // 2s stop
  return 2;
}
// await는 단독 사용 불가 == async 함수 내에서만 사용 가능 (set)

fetchNumbers()
.then(console.log);
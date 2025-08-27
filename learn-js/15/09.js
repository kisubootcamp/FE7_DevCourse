//ES5 콜백함수
//ES6 Promise 객체
//ES7 async.await (syntatic sugar)

//1, 2 100% 똑같이 작용.
//1
// function fetchNumber(){
//   return new Promise((resolve)=>resolve(2));
// }

//2
async function fetchNumber() {
  return 2;
}
fetchNumber() //
  .then(console.log);

//await의 사용
const dealy = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function fetchNumbers() {
  return dealy(2000) //
    .then(() => 2);
}

//가독성 좋음
async function fetchNumbers() {
  await dealy(2000); // stop
  return 2;
}
fetchNumbers() //
  .then(console.log);

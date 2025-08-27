/*

비동기 흐름을 제어하기 위해서
1. Callback
2. Promise
3. Async, Await

자바스크립트는 동기 => 코드를 한 번에 한 줄씩 순차적으로 실행
만약 동기적으로 어떤 코드가 10초가 걸리면 모든 코드가 10초 동안 멈춤
=> 비동기를 처리할 수 있는 방법을 제공 (비동기 -> 코드의 실행을 기다리지 않는다는 것)
Promise가 비동기를 끝낸 후 신호를 주기로 "약속"
Pending (비동기 처리 중) => 나중에 fulfiled, rejected로 변경 (비동기 처리가 끝남)
fulfiled -> then 실행
rejected -> catch 실행

A, B, C => 각각 1초씩 걸리는 비동기가 있을 때 총 3초가 걸리는데 병렬 처리할 수 있음
Promise.all, race, allSettled 등을 이용하거나
각각을 await로 해서 병렬 처리하도록 함

*/

// 내부적으로 executor라는 함수를 매개변수로 받는데 resolve와 reject가 있음
const promise = new Promise((resolve, reject) => resolve("성공"))
  .then(console.log)
  .catch(console.log);

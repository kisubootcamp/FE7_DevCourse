// 19. Promise Then 
// 연습 문제

// 1.기본 Promise
// `resolve`와 `reject`를 사용하는 간단한 Promise를 생성하고, 성공 시 "성공!"을 출력하도록 하세요.
const promise = new Promise((resolve, reject) => {
    resolve("성공!");
});

promise
  .then ((value) => {
    console.log(value);
  });
  // 간소화 가능 :: promise.then(consol.log);

// 2. 체이닝 *
// 두 개의 Promise를 체이닝하여 첫 번째 Promise가 성공적으로 완료된 후 
// 두 번째 Promise가 실행되도록 하세요.
const promise2 = new Promise((resolve) => resolve(2));

promise2
  .then ((num) => num * 2)
  .then ((num) => console.log(num));

// 3. 오류 처리
// Promise를 생성하고, reject를 사용하여 오류를 발생시키세요.
const promise3 = new Promise((_, reject) => reject(new Error("에러")));
promise3
   .catch((reason) => console.error(reason));

// tip. excutor의 경우 resolve, reject 순서가 있는데 예제 풀 때 reject만 필요한 경우 _, reject로 쓸 수 있음 (실무에서 쓸 일은 없겠지만)

// 4. 비동기 작업
// setTimeout을 사용하여 2초 후에 "비동기 작업 완료!"라는 메시지를 출력하는 Promise를 생성하세요.
const promise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("비동기 작업");
  }, 2000);
});
promise4.then(console.log);

// 5. 중첩 Promise
// 하나의 Promise 안에서 다른 Promise를 생성하여 중첩된 체이닝을 해보세요.
const promise5 = new Promise((resolve) => resolve(2));
promise5
.then((num) => {
  return new Promise((resolve) => resolve(num * 2));
})
.then(console.log);

// 6. 조건부 실행
// condition 변수를 생성하고, 변수에 할당된 true, false 값에 따라서 resolve, reject를 선택하여 호출하는 코드를 작성해주세요.
const promise6 = new Promise((resolve, reject) => {
  const condition = true;
  if (condition) resolve("성공");
  reject("실패");
});
promise6
.then(console.log)
.catch(console.error);
// 2-3. catch 메서드 (에러 핸들링 2번쨰 방법)
// ㄴ 실무에서 더 잘 쓰는 방법

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve("task1");
    reject(new Error("failed")); 
  }, 1000);
});

promise
  .then ((value) => {
    console.log(value);
  })
  .catch((reason) => { 
    console.error(reason);
  });
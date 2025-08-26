const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("kim");
    //reject("failed");
    //reject(new Error("failed")); // 정석
  }, 1000);
});

promise.then(
  (value) => { // resolve 실행
    console.log(value);
  },
  (reason) => { // reject 실패
    console.log(reason);
  }
);
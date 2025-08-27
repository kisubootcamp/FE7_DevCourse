const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("kim");
    reject(new Error("실패함"));
  }, 1000);
});

promise.then(
  (value) => {
    // resolve 실행되었을 때
    console.log(value);
  },
  (reason) => {
    // reject 실패했을 때
    console.error(reason);
  }
);

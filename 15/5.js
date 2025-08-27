const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("kim");
    reject(new Error("실패함"));
  }, 1000);
});

promise.then(
  (value) => {
    console.log(value);
  }, // resolve 실행됐읐 때
  (reason) => {
    console.error(reason);
  } // reject 실패했을 때
);

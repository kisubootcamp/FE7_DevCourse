const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(new Error("실패!"));
    resolve(2);
  }, 1000);
});

promise.then(
  // resolve 실행되었을 떄
  (value) => {
    console.log(value);
  },

  //reject 실패했을 때
  (reason) => {
    console.error(reason);
  }
);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('kim');
    reject(new Error('실패함'));
  }, 1000);
});

promise.then(
  (value) => {
    console.log(value);
  }, //실행되었을 때
  (reason) => {
    console.error(reason);
  } //실패했을 때
);

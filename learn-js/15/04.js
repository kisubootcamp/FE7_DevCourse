// 에러 핸들링
const promise = new Promise((resolve, reject) => {
  console.log("promise created");
  setTimeout(() => {
    resolve("task 1");
  }, 1000);
});
console.log("task2");

// 1
promise.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.error(reason);
  }
);

// 2
promise
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.error(reason);
  });

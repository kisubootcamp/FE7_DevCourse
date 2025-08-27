const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("kim");
    reject(new Error("실패함"));
  }, 1000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((reason) => {
    console.error(reason);
  });

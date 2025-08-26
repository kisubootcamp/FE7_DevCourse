const fetchNumber = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  }, 1000);
});

// TResult, PromiseLike, undefined, null
fetchNumber
  .then((num) => num * 2)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('에러 발생함')), 2000);
    });
  })
  .then((num) => console.log(num))
  .catch((reason) => {
    return 2;
  })
  .then((num) => console.log(num));

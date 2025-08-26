const fetchNumber = new Promise((resolve) => {
  setTimeout(() => {
    resolve(2);
  });
});

fetchNumber //
  .then((num) => num * 2)
  .then((num) => {
    return new Promise((resolve, reject) => {
      //setTimeout(() => resolve(num * 2), 2000);
      setTimeout(() => reject(new Error("에러 발생")), 2000);
    });
  })
  .catch(() => {
    return 0;
    //console.error(reason);
  })
  .then((num) => console.log(num));

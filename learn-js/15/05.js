const fetchNumber = new Promise((resolve) => {
  setTimeout(() => resolve(2), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

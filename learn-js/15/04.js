const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve(new Error("실패"));
    resolve("task1");
  }, 1000);
});

promise
  .then((value) => {
    console.log(value);
    return "task2";
  })
  .then((value) => {
    console.log(value);
    return "task3";
  })
  .then((reason) => {
    console.error(reason);
  });

//Uncaught: 개발자가 예외처리를 안 한 에러

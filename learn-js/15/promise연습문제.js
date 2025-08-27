//1
const promise1 = new Promise((resolve) => {
  resolve("성공!");
});

promise1.then((value) => {
  console.log(value);
});

//2
const promise2 = new Promise((resolve) => {
  resolve("2 성공!");
});

promise2
  .then((value) => {
    console.log(value);
    return value;
  })
  .then((value) => {
    console.log(value);
  });

//3
const promise3 = new Promise((_, reject) => {
  reject("실패");
});

promise3.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);

//4
const promise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("비동기 작업 완료!");
  }, 2000);
});
promise4.then((value) => console.log(value));

//5
const promise5_1 = new Promise((resolve) => {
  resolve("5_1 성공!");
});

promise5_1
  .then(
    (value) => {
      console.log(value);
      return new Promise((resolve, reason) => {
        resolve("중첩 체이닝 성공");
      });
    },
    (reason) => {
      console.log(reason);
    }
  )
  .then((value) => {
    console.log(value);
  });

//6
const promise6 = new Promise((resolve, reject) => {
  let condition = true;
  condition ? resolve("성공") : reject("실패");
});

promise6.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);

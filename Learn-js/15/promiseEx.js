// 1. 기본 Promise - resolve와 reject를 사용하는 간단한 Promise를 생성하고, 성공 시 "성공!"을 출력하도록 하세요.
const success = new Promise((resolve, reject) => {
  resolve("성공!");
});

success
  .then((value) => {
    console.log(value);
  })
  .finally(() => {
    console.log("end");
  });

// 2. 체이닝 - 두 개의 Promise를 체이닝하여 첫 번째 Promise가 성공적으로 완료된 후 두 번째 Promise가 실행되도록 하세요.
const first = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("first");
  }, 1000);
});

first
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("second");
      }, 1000);
    });
  })
  .then((second) => {
    console.log(second);
  })
  .finally(() => {
    console.log("Promise 종료");
  });

// 3. 오류 처리 - Promise를 생성하고, reject를 사용하여 오류를 발생시키세요
const errP = new Promise((resolve, reject) => {
  reject("오류 발생!");
});

errP
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise 종료");
  });

// 4. 비동기 작업 - setTimeout을 사용하여 2초 후에 "비동기 작업 완료!"라는 메시지를 출력하는 Promise를 생성하세요.
const setT = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("비동기 작업 완료!");
  }, 2000);
});

setT
  .then((value) => {
    console.log(value);
  })
  .finally(() => {
    console.log("end");
  });

// 5. 중첩 Promise - 하나의 Promise 안에서 다른 Promise를 생성하여 중첩된 체이닝을 해보세요.
const pp = new Promise((resolve, reject) => {
  resolve("first");
});
pp.then((value) => {
  console.log(value);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("second");
    }, 1000);
  });
})
  .then((value2) => {
    console.log(value2);
  })
  .finally(() => {
    console.log("end");
  });

// 6. 조건부 실행 - condition 변수를 생성하고, 변수에 할당된 true, false 값에 따라서 resolve, reject를 선택하여 호출하는 코드를 작성해주세요.
const condition = true;

const condP = new Promise((resolve, reject) => {
  if (condition) resolve("true");
  else reject("false");
});

condP
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("end");
  });

function data() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // 작업의 성공 여부 가정
      if (success) {
        resolve('작업이 성공적으로 완료되었습니다.'); // 성공 시 resolve 호출
      } else {
        reject('작업 중 오류가 발생했습니다.'); // 실패 시 reject 호출
      }
    }, 2000);
  });
}

async function userData() {
  const user = await data();
}

myPromise
  .then((message) => {
    console.log(message); // "작업이 성공적으로 완료되었습니다."
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Promise 작업이 끝났습니다.');
  });

// 1. 기본 Promise
{
    const promise = new Promise((resolve, reject) => {

    })

    promise
    .then(result => {
        console.log(result);
    })
}

// 2. 체이닝
{
    const promise = new Promise((resolve, reject) => {
    })

    promise.then().then();
}

// 3. 오류 처리
{
    const promise = new Promise((resolve, reject) => {
        reject("에러 발생");

    })
    promise.catch(error => {
        console.error(error);
    })
}

// 4. 비동기 작업
{
    const promise = new Promise((resolve, reject) => {
        resolve("비동기 작업 완료");
    })
    promise.then((result) =>
        setTimeout(() => {
            console.log(result);
        }, 2000)
    );
}

// 5. 중첩 Promise
{
    const promise = new Promise((resolve, reject) => {
        const promise2 = new Promise((resolve, reject) => {

        })
    })
}

// 6. 조건부 실행
{
    const promise = new Promise((resolve, reject) => {
        const condition = true;
        if (condition) {
            resolve();
        } else {
            reject();
        }
    })
}
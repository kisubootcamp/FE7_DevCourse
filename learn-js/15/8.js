const fetchNumber = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    });
});

// TResult, PromiseLike, undefined, null
fetchNumber
.then((num) => num * 2)
.catch(() => {
    return 0;
})
.then((num) => {
    return new Promise((resolve) => {
    setTimeout(() => reject(new Error("에러 발생함")), 2000);
    })
})
.catch(() => {
    return 0;
})
.then((num) => console.log(num));
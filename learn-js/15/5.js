const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("kim");
        reject(new Error("실패함"));
    }, 1000)
})

promise
    .then((value) => {
        console.log(value);
        return "task2";
    }) // resolve 실행되었을 때
    .then((value) => {
        console.log(value);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("task3");
            }, 2000);
        })
    })
    .then((value) => {
        console.log(value);
        return "task4";
    })
    .then((value) => {
        console.log(value);
        return "task all finish"
    })
    .catch((reason) => {
        console.error(reason);
    }); // rejct 실패했을 때
function task1() {
    return new Promise((resolve) => resolve("task1"));
}
function task2() {
    return newPromise((resolve) => {
        setTimeout(() => {
            console.log("task2");
            resolve();
        });
    })
}
function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("task1");
        })
    });
}
function task4() {
    return newPromise((resolve) => {
        setTimeout(() => {
            console.log("task4");
            resolve();
        }, 1000);
    })    
}

function task5() {
    return new Promise((resolve) => {
        console.log("task5");
        resolve();
    });
}
// then, catch, finally
task1()
.then(() => task2())
.then(() => task3())
.then(() => task4())
.then(() => task5())
.finally(() => console.log("task all finish"));

function task1() {
    return new Promise((resolve) => resolve("task1"));
}
function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("task2");
            resolve();
        });
    })
}
function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("task3");
        })
    });
}
function task4() {
    return new Promise((resolve) => {
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
.then(() => task2()) // task2
.then((result) => {
    console.log(result);
    return task3();
})
.then(() => task4()) // task4
.then(() => task5()) // task5
.finally(() => console.log("task all finish"));

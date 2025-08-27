function task1() {
    console.log("task1");
}
function task2() {
    setTimeout(() => console.log("task2"), 1000);
}
function task3() {
    console.log("task3");
}
function task4() {
    return new Promise((resolve) => {
        setTimeout(() => {
        }, 1000);
    })
}
function task5() {
    console.log("task5");
}

// Promise, catch()
// Async-await, try-catch
// 콜백함수, 콜백 지옥 패턴
async function runTasks() {
    try {
    await task1();
    await task2();
    await task3();
    await task4();
    await task5();
    } catch (e) {
        console.error(e);
    } finally {
        console.log("task all finish");
    }
}
runTasks();
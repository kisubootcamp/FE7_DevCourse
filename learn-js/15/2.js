function printOne(callback) {
    console.log("1");
    callback();
}

function printTwo(callback) {
    setTimeout(() => {
        console.log("2");
        callback();
        console.log(4);
    }, 1000)
    console.log(5);
}

function printThree() {
    console.log("3");
}

printOne(() => {
    printTwo(() => {
        printThree();
    })
});
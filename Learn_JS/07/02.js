// let level = 1;
// function levelUp(){
//     level++;
// }
// levelUp();
// levelUp();

const { L } = require("vitest/dist/chunks/reporters.d.BFLkQcL6.js");

// // 변수가 보호되지 않는다.
// // 변수가 은닉되지 않는다.
// level = 99;
// levelUp();
// levelUp();
// console.log(level);

// function levelUp(){
//     let level = 1;
//     level++;
//     return level;
// }

// const level = levelUp();
// level = levelUp();
// level = levelUp();
// level = levelUp();
// level = levelUp();
// console.log(level);

function levelUp(){
    let level = 0;
    function inner(){
        level++;
        return level;
    }
    return inner;
}

const myLevel = levelUp();
console.log(myLevel());
console.log(myLevel());
console.log(myLevel());
console.log(myLevel());

// const myLevelUp = levelUp();
// let warior = myLevelUp();
// warior = myLevelUp();
// warior = myLevelUp();
// warior = myLevelUp();

// console.log(warior);
// console.log(level);

const wariorUp = levelUp();
const archerUp = levelUp();

let warior = wariorUp();
let archer = archerUp();

warior = wariorUp();
warior = wariorUp();
warior = wariorUp();
archer = archerUp();
archer = archerUp();
archer = archerUp();

console.log(warior);
console.log(archer);

// 클로저
// 함수가 선언 될 떄의 렉시컬 스코프를 기억하고 그 스코프에 있는 변수에 접근할 수 있는 함수

// 데이터 은닉 - 외부에서 데이터에 직접 접근 가능
// 상태 유지 - 함수 호출 간 변수를 계속 기억

function outer(){
    let count = 0;
    return () => ++count;
}

const counter1 = outer();
console.log(counter1()); // 1
console.log(counter1()); // 2
counter1 = null;

const counter2 = outer();
console.log(counter2()); // 3 -> 1
console.log(counter2()); // 4 -> 2
console.log(counter2()); // 5 -> 3
counter2 = null;
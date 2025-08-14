// let level = 1;
// function levelup() {
//     return level;
// }
// levelup();
// levelup();

// // 변수가 보호되지 않는다
// // 변수가 은닉되지 않는다

// level = 99;

// levelup();
// levelup();

// console.log(level);



// function levelup() {
//     let level = 1; // 변수에 값이 할당되어 TDZ 해소됨. 함수 호출될 때마다 level 초기화
//     level += 1;
//     return level; // 상위 컨텍스트에 반환환
//     // 가비지 컬렉션으로 메모리 회수
// }
// let level = levelup();
// level = levelup();
// level = levelup();
// level = levelup();
// level = levelup();

// console.log(level);


function levelup() {
    let level = 0;
    const inner = function inner() {
        level++;
        return level;
    }
    return inner; // inner만 상위 스코프로 전달달
}

const wariorlUp = levelup();
let warior = wariorlUp();
warior = wariorlUp();
warior = wariorlUp();
warior = wariorlUp();

console.log(warior);
console.log(level);

// console.log(myLevel());

let archer = archerUp();
archer = archerUp();



console.log(`warrior: %{warior}`);
console.log(`archerr: %{archer}`);


// 클로저, 클로저 함수
// 함수가 선언될 때의 렉시컬 스코프(=환경)를 기억하고, 그 스코프(=환경)에 있는 변수에 접근할 수 있는 함수
// 가비지 컬렉션이 수행되지 않고 메모리가 남아있는 상태
// 1. 데이터 은닉 - 외부에서 데이터에 직접 접근할 수 없다
// 2. 상태 유지 - 함수 호출 간 변수를 계속 기억
// 클로저 함수끼리는 상태를 공유하지 않음

function outer() {
    let count = 0;
    return () => ++count;
    // function counter() {
    //     return ++count;
    // }
    // return counter;
}

const counter = outer();
console.log(counter());
console.log(counter());
console.log(counter());

const counter1 = outer();
console.log(counter1()); // 1
console.log(counter1()); // 2
counter1 = null;

const counter2 = outer();
console.log(counter2()); // 3 -> 1
console.log(counter2()); // 4 -> 2
console.log(counter2()); // 5 -> 3
counter2 = null;

{
    // var a = 10; // var는 참조 가능
    let a = 10; // let은 참조 불가능
}
console.log(a);
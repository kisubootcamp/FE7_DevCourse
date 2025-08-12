// var num = 5;
// console.log(num);

// function num(){
//     return 10;
// }

// console.log(num);
// console.log(num()); // TypeError: num is not a function

// 함수 선언이 먼저 호이스팅
// 그러나 num에 5가 할당됨
// num()을 출력할 떄는 이미 5가 할당되어서 함수가 아님

function num(){
    return 10;
}

var num;
console.log(num);
num = 5;

console.log(num);
console.log(num());
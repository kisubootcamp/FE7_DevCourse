// 호이스팅
// 호이스팅은 선언과 할당 중에서 선언을 최상위로 끌어올리는 행위

console.log(n);
var n = 2;

console.log(num); // error
let num = 10;
console.log(num);

printName();
// 함수 선언문
function printName() {
    console.log("greet");
}

// printName();
console.log(printName);
// 함수 표현식
const printName = () => {
    console.log("greet");
}
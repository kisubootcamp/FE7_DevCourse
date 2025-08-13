// 호이스팅
// 선언과 할당 중에서 선언을 최상위로 끌어롤리는 행위
var num = 10;
console.log(num);

printName();
function printName(){
    console.log("greet");
}
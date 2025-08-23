// 호이스팅
// 호이스팅은 선언과 할당 중에서 선언을 최상위로 끌어올리는 행위

// console.log(num);
// let num = 10;
// console.log(num);

printName();
var printName = function printName() {
  console.log("greet");
};

var printName;
printName();
printName = function printName() {
  console.log("greet");
};

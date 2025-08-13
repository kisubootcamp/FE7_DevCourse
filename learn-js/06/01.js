// 호이스팅
// 선언과 할당 중에서 선언을 최상위로 끌어올리는 현상

console.log(num);
var num = 10; // 선언과 할당

// 위 코드는 아래와 동일하게 실행
var num;
console.log(num);
num = 10;

let num;
console.log(num);
num = 10;
// let과 const는 호이스팅이 되지 않음 <= 이렇게 이해해서는 안된다.
// 접근할 수 없다는 의미
// let과 const는 선언 전에 접근할 수 없기 때문에 ReferenceError가 발생

//

printName();
var printName = function printName() {
  console.log("호이스팅");
};

// 위 코드는 아래와 동일하게 실행
var printName;
printName(); // printName은 undefined -> not a funciton 에러 발생
printName = function printName() {
  console.log("호이스팅");
};

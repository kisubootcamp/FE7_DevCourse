// 호이스팅
// 자바스크립트 문법을 선언과 할당으로 구분을 분리해서, 선언 부분을 최상위로 끌어올리는 현상

console.log(num);
var num = 10;
/*
호이스팅으로 인해 아래와 같다
var num;
console.log(num);
num = 10;

>> undefined
*/

// 그렇다고 해서 let이 호이스팅이 일어나지 않느냐? 하면 그건 아님
console.log(num2);
let num2 = 10;

//ReferenceError: Cannot access 'num2' before initialization
/* let과 const는 호이스팅은 되지만,
실제 할당이 이루어지기 전까지는 변수에 접근할 수 없다!

let,const로 넘어오며 개발자는 오류가 발생한 지점의 윗 부분을 확인하면 된다는 편의성을 얻음
*/

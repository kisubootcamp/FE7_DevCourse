//호이스팅
//자바스크립트 문법을 선언과 할당으로 구문을 분리해서, 선언 부분을 최상위로 끌어 올리는 현상
//자바스크립트는 한줄 한줄 실행하는 인터프리터 언어이기 때문에...

//var num; 자바스크립트가 내부적으로 선언해준다.
console.log(num); //선언되지 않은 변수를 출력.

//let, const는 'num이 초기화되지 않아 접근할 수 없다'는 오류가 나온다.
//num is undefined 라는 오류가 나오는 것이 아니므로 호이스팅이 되지 않는 것은 아님!
//호이스팅은 되지만, 초기화가 지연된다. 라고 말할 수 있음. 할당이 되어야 접근 가능.

var num = 10; //출력: undefined / num is undefined가 아님.

console.log(num);

//var는 오류 발생시 해당 구문 위, 아래를 전부 봐야했다.(호이스팅으로 인해)
//let, const는 할당이 되어야 접근 가능하기 때문에 오류 발생 시 해당 구문 위 코드만 확인하면 됨.

//호이스팅이 적용된다.
greet();
greet2(); // undefined이므로 'greet2는 함수가 아니다'라는 오류가 나온다.
greet3(); // let, const의 경우 '초기화되지 않아 접근할 수 없다'는 오류가 나온다.

//함수 선언문(선언식). 선언과 할당으로 구분해보자면, 이 구문은 선언이다. 따라서 해당 구문은 최상위로 끌어올려진다.
function greet() {
  console, log("Hello");
}

//함수 표현식. 선언과 할당으로 구분해보자면, 할당과 선언 부분이 나뉘게 된다.'var greet2'만 최상위로 끌어올려진다.
var greet2 = function greet() {
  console, log("Hello");
};

let greet3 = function greet() {
  console, log("Hello");
};

//최상단으로 끌어올려짐
//var num
// function num(){
//     return 10;
// }

//자바스크립트는 변수에 아무것도 넣을 것이 없을 때만 undefined를 넣음.

//var num = 5; //먼저 초기화 됨.
let num = 5; //Identifier 'num' has already been declared
console.log(num);

//끌어올려짐
function num() {
  return 10;
}
console.log(num);
console.log(num()); //num()시 '함수가 아니다'라는 오류가 나온다.

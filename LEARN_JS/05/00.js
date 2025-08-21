// 호이스팅
// 선언을 위로 올리고, 초기화 및 할당은 제자리에서 하는 것

// 타입별 기본 동작
// var : 선언이 끌어올려지고 초기화도 같이 일어남 -> 선언 전 접근 시 undefined
// let / const : 선언만 끌어올려지고 초기화는 안 됨 -> 선언 전 구간에서 접근 시 ReferenceError
// console.log(num);
// var num = 10; //undefined
// let num = 10; //TDZ

// 함수 선언식 : 선언이 끌어올려지고 함수 값까지 준비됨 -> 선언 전 호출 가능
/*
printName();
function printName() {
  console.log("윤희");
}
*/
// 함수 표현식 : 변수 쪽 규칙을 따름 var면 undefined로, let / const면 ReferenceError
/*
printName();
var printName = () => {
  console.log("윤희");
};
*/

// let / const는 호이스팅이 안되는 것이 아니라 호이스팅은 되지만 TDZ 때문에 선언 전 접근이 막힘

//파스칼 케이스 - 모든 단어의 첫글자가 대문자, UserName
//스네이크 케이스 - 단어를 연결할 때는 _, user_name
//케밥케이스 - 단어를 연결할 때는 -, user-name
//카멜케이스 - 연결된 단어의 첫 글자는 대문자, userName

//배열
//index, 배열의 요소의 첫 번째부터 0부여가 되고, 그 뒤로 순차적으로 1씩 증가하는 값
const score = [90, 40, 20, 100];
console.log(score[0]); //90
console.log(score[3]); //100
console.log(score[10]); //undefined

//객체 {}
//키 + 값 = 속성
//키와 값으로 구성된 속성들의 집합
const scoreObj = {
  mathScore: 90,
  engScore: 40,
  korScore: 20,
  sienceScore: 100,
};
console.log(scoreObj["mathScore"]);
console.log(scoreObj.sienceScore); //실무에서는 이 방법을 더 많이 씀
//키 값이 숫자인 경우, .으로 접근 불가, 무조건 대괄호를 써서 접근해야 함
//키의 값에 공백이 있어도 대괄호를 써야 함, 이 때는 따옴표로 키 값이 문자열이라는 것을 표현해야 함

//함수
function sum() {}

console.log(typeof scoreObj);

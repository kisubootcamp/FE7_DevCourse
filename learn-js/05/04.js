//변수와 함수가 같이 나온다면?

var num = 5;
console.log(num);

function num() {
  return 10;
}

console.log(num);
console.log(num());
//답은 5 5 나오고 마지막은 함수가 아니라는 에러가 나온다

//호이스팅 된 것은 어떻게 나올까
var num;
function num() {
  return 10;
}
num = 5; //여기서 num이 다시 변수로 할당 되면서
console.log(num);

console.log(num);
console.log(num()); // 이게 더 이상 함수가 아니게 됨

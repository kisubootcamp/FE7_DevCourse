// 클로저
// 사라져야할 함수 콘텍스트가 wariorlUp에서 계속 쓰고 있기 때문에 사라지지 않음
function levelUp() {
  let level = 0;
  function inner() {
    level++;
    return level;
  }
  return inner; //호출이 아니라서 함수를 return 하는거는 함수 실행 컨텍스트가 생기지 않음, 상위스코프로 inner함수를 전달만 함
}

const wariorUp = levelUp(); // inner함수가 담김
const archerUp = levelUp();

let warior = wariorUp();
warior = wariorUp();
warior = wariorUp();

let archer = archerUp();
archer = archerUp();

console.log(warior);
console.log(archer);

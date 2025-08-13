// let level = 1;
// function levelup() {
//   level++;
// }
// levelup();
// levelup();

// // 변수가 보호되지 않는다.
// // 변수가 은닉되지 않는다.
// level = 99;

// levelup();
// levelup();
// console.log(level);

// 은닉은 됐지만 값이 변화하지 않음.
// function levelup() {
//   let privateLevel = 1;
//   privateLevel++;
//   return privateLevel;
// }

// const level = levelup();
// console.log(level);

// 은닉과 값 변화 둘 다 되는 코드
function levelup() {
  let level = 0;
  function inner() {
    level++;
    return level;
  }
  return inner;
}

const warriorUp = levelup();
const archorUp = levelup();

let warrior = warriorUp();
warrior = warriorUp();
warrior = warriorUp();

console.log(warrior);

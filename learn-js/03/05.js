// var, let, const
// var - ES5
// let, const - ES6
// let과 const는 블록스코프

{
  var varGo = "var";
  let letGo = "let";
  let constGo = "const";
}

console.log(varGo);
// console.log(letGo);
// console.log(constGo);

// 다중반복문
// continue
// break
// 웬만하면 사용하지 않는 것이 좋다? 안티패턴 중 하나다
for (let i = 1; i <= 9; i++) {
  if (i % 2 === 1) continue;
  if (i === 8) break;
  console.log(i);
}

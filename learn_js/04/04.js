//매개변수(parameter) : dan
function gugudan(dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}
// 인자 또는 인수(argument) : 4
gugudan(4);

//가변 인자 함수(ES5)
function sum() {
  let result = 0;
  for (const i in arguments) result += arguments[i];
  console.log(result);
}
sum(10, 20);

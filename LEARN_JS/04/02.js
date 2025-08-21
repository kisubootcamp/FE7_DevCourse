/*
const gugudan3 = () => {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(i + " X " + j + " = " + i * j);
    }
  }
};
gugudan3();
*/

const gugudan = (a) => {
  for (let i = 1; i <= 9; i++) {
    console.log(`${a} X ` + i + " = " + a * i);
  }
};
gugudan(4);

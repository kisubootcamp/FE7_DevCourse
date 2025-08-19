const main = function main() {
  console.log(this);
}.bind({ name: "Bound Object" });

main();

const mainBind = main.bind({});
mainBind();

// window.main();

// 화살표 함수는 내부적으로 this가 없다.
const sub = () => console.log(this);
const subBind = sub.bind({});
subBind();

// 함수 내부에서 this를 사용할 때는
// 화살표 함수가 아닌 일반 함수를 사용하는 것이 좋다.

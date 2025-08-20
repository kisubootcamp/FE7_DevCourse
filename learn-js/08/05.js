//this 함수를 호출한 객체
function main() {
  console.log(this);
}
const mainBind = main.bind();
mainBind();

//bind : this가 가리키는 대상을 원하는 대상으로 바꾼다
// 연속해서 2번 사용할 수 없음.

const obj = {
  name: "main",
  main: function () {
    console.log(this);
  },
};

obj.main();


// 화살표함수는 내부적으로 this가 없음
// 자신이 속해있는 컨텍스트의 this를 빌려옴
// 그래서 bind불가능
const sub = () => console.log(this);
const subBind = sub.bind({});
subBind();

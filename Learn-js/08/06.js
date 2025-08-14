// this는 함수를 호출한 객체
// bind => this를 바꿔줌

const obj = {
  name: "main",
  main: function () {
    console.log(this);
  },
};

obj.main();

const sub = () => console.log(this);
const subBind = sub.bind({});
subBind();

// this는 함수를 호출한 객체다
// bind는 한 번만 가능하다.

// const main = function main() {
//   console.log(this);
// };
// const mainBind = main.bind({});

// mainBind();

const obj = {
  name: "main",
  main: function () {
    console.log(this);
  },
};

obj.main();

// 화살표 함수는 내부적으로 this가 없다.
// 자신이 속해있는 컨텍스트의 this를 빌려온다.
const sub = () => console.log(this);
// sub();
const subBind = sub.bind({});
// subBind();

const obj2 = {
  name: "main",
  main: function () {
    console.log(this);
    const sub = function () {
      console.log(this);
    };
    sub();
  }.bind({ name: "sucoding" }),
};
obj2.main();

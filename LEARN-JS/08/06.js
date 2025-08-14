// this는 함수를 호출한 객체다
const obj = {
  name: 'main',
  main: function () {
    console.log(this);
  }.bind(10),
};

obj.main();

// 화살표함수는 내부적으로 this가 없다.
// 자신이 속해있는 컨텍스트의 this를 빌려온다.
const sub = () => console.log(this);
const subBind = sub.bind({});
subBind(); //window

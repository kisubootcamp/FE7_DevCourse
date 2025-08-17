// this 함수를 호출한 객체다

const main = function main() {
  console.log(this);
}.bind({ name: "sucoding" });
//원래는 window 객체가 나와야 하는데, bind를 추가해서 뒤에 객체를 넣으면 this가 기리키는 객체를 강제로 고정한다.
main();

// 화살표 함수는 내부적으로 this가 없다
// 자신이 속해 있는 컨텍스트의 this를 빌려온다
// 자신의 위치에 있는 곳에서 this를 빌려오는 거라서, 자신의 위치가 지금 전역 콘텍스트(=window)에 있어서 그걸 가져옴
const sub = () => console.log(this);
const subBind = sub.bind({});
subBind(); // 이렇게 하면 빈 객체가 나와야 하는데 화살표 함수라 window객체가 나옴

const obj = {
  name: "sucoding",
  main: () => console.log(this),
  main1: function () {
    console.log(this);
    const sub = () => console.log(this); //얘는? 상위 this가 나오는데 상위 this는 obj니까 obj 객체가 나옴
  },
};
obj.main(); //출력은? window객체가 나옴
obj.main1(); //obj가 나옴

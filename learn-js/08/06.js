// bind
// this가 가리키는 대상을 내가 원하는 대상을 가르키도록 고정하기 위해서 사용

function main() {
  console.log(this);
}
main(); //window
const mainBind = main.bind();
mainBind(); // {}빈객체

// bind는 연속 두 번 사용 불가
main.bind({}).bind();

//
const obj = {
  name: "main",
  main: function () {
    console.log(this);
  },
};

obj.main(); //obj를 가르킴

const objBind = {
  name: "main",
  main: function () {
    console.log(this);
  }.bind({}), // 이렇게 쓰는건가..?
};
obj.main(); // bind 뒤의 {}를 가리킴

// 화살표 함수는 내부적ㅇ로 this가 없음
// 자신이 속해 있는 (상위) 컨텍스트의 this를 빌려옴
// bind가 먹히지 안흠ㅁ
const objJ = {
  name: "kim",
  main: function () {
    console.log(this); //objJ
    const sub = () => console.log(this); //objJ
    sub();
  },
};

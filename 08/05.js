// this
// this는 함수를 호출한 객체를 가리킨다.
// 화살표 함수의 this, 일반 함수의 this

function main() {
  console.log(this);
}

const mainBind = main.bind({ name: "sucoding" });

const obj = {
  name: "kim",
  smallObj: {
    main: mainBind,
    name: "small",
    main: main,
  },
};

main();
obj.main();
obj.smallObj.main();
mainBind();

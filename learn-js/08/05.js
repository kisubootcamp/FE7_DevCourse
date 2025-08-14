// this
// this는 함수를 호출한 객체를 가르킨다
// 화살표 함수의 this, 일반 함수의 this 는 다름

function sum() {
  console.log(this);
}
sum(); // (window.)sum();으로 생략되어 있는 것임
// window는 객체, this는 함수를 호출한 객체(window)를 가리킴 -> 개발자 도구 확인

const obj = {
  name: "kim",
  main: function () {
    console.log(this);
  },
};
obj.main(); // this는 obj 를 갈킴

//
function main() {
  console.log(this);
}
const objA = {
  name: "kim",
  main: main,
  smallObj: {
    name: "small",
    main: main,
  },
};
objA.main(); // objA 가리킴
main(); // window 가리킴
obj.smallObj.main(); // smallObj 가리킴

// 함수는 호출과 동시에 바뀜?
// 화살표 함수는 선언과

// new의 기능...

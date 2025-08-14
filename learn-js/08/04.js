// this
// this는 함수를 호출한 객체를 가리킨다.
// 화살표 함수의 this, 일반 함수의 this

function sum() {
  console.log(this);
}

sum(); //원래는 여기 앞에 window가 붙어있음
//그래서 this는 자신을 호출한 window를 가리키게 됨

function main() {
  console.log(this);
}

const obj = {
  name: "kim",
  main: main,
  smallObj: {
    name: "small",
    main: main,
  },
};

obj.main(); //여기서는 자신(함수)을 호출한 obj(객체)를 가리킴
obj.smallObj.main(); //여기서는 자신(함수)을 호출한 smallObj(객체)를 가리킴

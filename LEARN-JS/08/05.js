// this
// this는 함수를 호출한 객체를 가르킨다.
// 화살표 함수의 this, 일반 함수의 this는 다르다
// this를 사용할 때에는 화살표 함수 사용은 비권장

function main() {
  console.log(this);
}

const mainBind = main.bind({ name: 'lee' });

const obj = {
  name: 'kim',
  main: main,
  smallObj: {
    name: 'small',
    main: main,
  },
};

obj.main();
obj.smallObj.main();
mainBind();

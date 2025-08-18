// this

// this는 함수를 호출한 객체를 가리킨다.

function main() {
  console.log(this);
}

const mainBind = main.bind({ name: "Bound Object" });

const obj = {
  name: "Object",
  main: mainBind,
  smallObj: {
    name: "Small Object",
    main: function () {
      console.log(this);
    },
  },
};

obj.main();
obj.smallObj.main();

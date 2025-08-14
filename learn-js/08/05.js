// this
// this는 함수를 호출한 객체를 가르킨다
// 화살표 함수의 this, 일반 함수의 this

function main () {
    console.log(this);
}

const mainBind = main.bind({name: "sucoding"});

main();
// window.sum();

const obj = {
    name: "kim",
    main: mainMaind,
    main: main,
    smallObj: {
        name: "small",
        main: main,
    }
}

obj.main();
obj.smallObj.main();
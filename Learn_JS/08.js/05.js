// this
// this는 함수를 호출한 객체를 가르킨다.
// 화살표 함수의 this, 일반 함수의 this

// function sum() {
//     console.log(this);
// }

// window.sum();

function main(){
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

obj.main();
obj.smallObj.main();
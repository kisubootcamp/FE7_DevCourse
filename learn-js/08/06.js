// this 함수를 호출한 객체다

// const main = function main() {
//     console.log(this);
// }.bind({name: "sucoding"});


// function main() {
//     console.log(this);
// }
// const mainBind = main.bind({});
// mainBind();

const obj = {
    name: "main",
    main : function () {
        console.log(this);
    }
}

obj.main();

const sub = () => console.log(this);
const subBind = sub.bind({});
subBind();

const obj2 = {
    name: "sucoding",
    main: function () {
        const sub = () => console.log(this);

    }
}



// 자바스크립트에 존재하는 모든 값은 객체
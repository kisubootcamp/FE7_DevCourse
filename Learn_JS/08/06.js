// this 함수를 호출한 객첻

const main = function main(){
    console.log(this);
}.bind({name : "sucoding"});

window.main();

const mainBind = main.bind(10);
mainBind();

const obj = {
    name: "main",
    main: function(){
        console.log(this);
    }.bind({}),
};

obj.main();

// 화살표 함수는 내부적으로 this가 없다.
// 자신이 속해 있는 컨택스트의 this를 빌려온다
const sub = () => console.log(this);
const subBind = sub.bind({});
subBind();
function gugudan(n){
    for(let i = 1; i < 10; i++){
        console.log(`${n} x ${i} = ${n * i}`);
    }
};
gugudan(1);
gugudan(2);
gugudan(3);
gugudan(4);
gugudan(5);
gugudan(6);
gugudan(7);
gugudan(8);
gugudan(9);

// 덧셈을 하는 함수
// 함수의 매개 변수
// 매개 변수는 정의에 대한 의무가 없다.
function sum(num1, num2){
    console.log(num1 + num2);
}
sum(10, 20);
sum(10, 200);
sum(10, 20, 30);

// 가변 인자 함수 / ES5
function sum2(){
    console.log(arguments); // 유사 배열 객체
    console.log(arguments.length);

    let result = 0;
    for(const argument of arguments){
        console.log(argument);
        result += argument;
    }
    console.log(result);
}
sum2(10, 20, 30);

// 나머지 매개변수 ES6
// ... 스프레드 연산자
function sum3(num1, num2, ...nums){
    console.log(num1, num2);
    console.log(nums);
}
sum3(10, 20, 30, 40);

// 스코프, 변수가 유효한 범위
// 함수 스코프, 블록 스코프(ES6)
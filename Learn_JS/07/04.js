const { K } = require("vitest/dist/chunks/reporters.d.BFLkQcL6.js");

// 은닉화
function counter(){
    let _count = 0;
    return {
        increment: function(){
            return ++_count;
        },
        decrement: function(){
            return --_count;
        },
    };
}
let myCount = counter();
console.log(myCount.increment());
console.log(myCount.increment());
console.log(myCount.decrement());

myCount = null;

// 함수 팩토리
// 함수를 만들어내는 기능을 하는 함수
function makeMultiple(multipler){
    return function(x) {
        return x * multipler;
    };
}
let double = makeMultiple(2);
console.log(double(10));
double = null;

// 메모이제이션
function memoization(cb){
    const cache = {};
    return function(...args){
        // 함수 호출 시 전달된 모든 인자를 배열 형태로 받고
        // 이를 JSON 문자열로 변환해서 캐시 key로 사용
        const key = JSON.stringify(args);
        
        // 이미 해당 key로 계산한 결과가 있다면 즉시 반환(재계산 불필요)
        if(cache[key]) return cache[key];
        // 캐시에 없다면 원래 함수를 실행하여 결과를 없음 
        const result = cb(...args);
        // 결과를 캐시에 저장
        cache[key] = result;
        // 결과를 반환
        return result;
    };
}
function slowFunction(num){
    for(let i = 0; i< 9999999999; i++);
    return num * 2;
}

const memoizedFn = memoization(slowFunction);
console.log(memoizedFn(10));
console.log(memoizedFn(10));
console.log(memoizedFn(10));
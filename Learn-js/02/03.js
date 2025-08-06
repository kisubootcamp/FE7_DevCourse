// 증감 연산자
// 증가 ++, 감소 -- 연산자

// 후치 => aa에 a값을 먼저 할당하고 a값을 ++
// 전치 => a값을 넣기 전에 ++ 하고 aa에 할당

let a = 10;
let aa = a++;

console.log(a);
console.log(aa);

let b = 10;
let bb = ++b;

console.log(b);
console.log(bb);

let e = 10;
console.log(e++ + 1);

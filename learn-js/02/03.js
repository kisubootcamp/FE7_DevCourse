// 증감연산자
// 증가(++), 감소(--) 연산자
let a = 10;
a++; // 후치
++a; //전치
console.log(a);

let b = 10;
--b; //전치(~하기 전에)
b--; //후치(~한 후에)
console.log(b);

let c = 10;
let d = c++; //10저장 , 변수 c를 d에 할당한 후에~
d = ++c; //11저장, 변수 c를 d에 할당하기 전에~

console.log(d);
let e = 10;
console.log(e++ + 1); //11

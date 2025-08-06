//증감 연산자

let a = 10;
++a; //전치(~하기 전에)
a++; //후치(~한 후에)
console.log(a);

let b = 10;
--b; //전치(~하기 전에)
b--; //후치(~한 후에)
console.log(b);

let c = 10;
let d = ++c; //전치이므로 11
console.log(d);

let e = 10;
console.log(e++ + 1); //후치이므로 10+1 = 11

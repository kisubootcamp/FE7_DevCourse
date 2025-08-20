// hasOwn()
/*
이유: 프로토타입 체인에 있는 키가 아니라 자기 자신의 키인지 안전하게 확인. 
in 연산자나 obj.hasOwnProperty보다 실수 적음.
*/

const obj = { name: "jiho" };
console.log(Object.hasOwn(obj, "name")); // 오브젝트가 해당 key 를 가지고 있는지?

//Object.freeze: 외부조작, 변경, 추가, 삭제 전부 불가.
const frozenObj = Object.freeze({
  name: "Kim",
});

console.log(frozenObj);

frozenObj.name = 10;
delete frozenObj.name;
frozenObj.age = 20;

console.log(Object.isFrozen(frozenObj)); //풀기
console.log(frozenObj);

//Object.seal: 프로퍼티의 추가와 삭제만 안된다.
const sealedObj = Object.seal({
  //프로퍼티의 추가와 삭제만 안된다.
  name: "Kim",
});

console.log(sealedObj);

sealedObj.name = "park";
delete sealedObj.name;
sealedObj.age = 20;

console.log(sealedObj);
console.log(Object.isSealed(sealedObj)); //풀기

//프로퍼티의 추가만 방지
const preventObj = Object.preventExtensions({
  name: "Kim",
});

console.log(preventObj);

preventObj.name = "park";
delete preventObj.name;
preventObj.age = 20;

console.log(preventObj);
console.log(Object.isExtensible(preventObj));

const obj = Object.freeze({
  // 프로퍼티 추가, 삭제, 변경 모두 불가
  name: "kim",
});
obj.name = 10;
delete obj.name;
obj.age = 10;

console.log(obj);
console.log(Object.isFrozen(obj));

const sealedObj = Object.seal({
  // 프로퍼티의 추가와 삭제만 안됨. 변경은 가능
  name: "kim",
});

sealedObj.name = "park";
console.log(sealedObj.name);
console.log(Object.isSealed(sealedObj));

//프로퍼티의 추가만 방지
const preventObj = Object.preventExtensions({
  name: "kim",
});
delete preventObj.name;
console.log(preventObj);
console.log(Object.isExtensible(preventObj));

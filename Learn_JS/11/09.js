const obj = Object.freeze({
    name: "kim",
});

obj.name = 10;
delete obj.name;
obj.age = 20;
console.log(Object.isFrozen(obj));
console.log(obj);

const sealedObj = Object.seal({
    // 프로퍼티에 추가와 삭제만 안됨
    name: "kim",
}) 

sealedObj.name = "park";
delete sealedObj.name;
sealedObj.age = 20;
console.log(sealedObj);
console.log(Object.isSealed(sealedObj));

// 프로퍼티 추가만 막음
const preventObj = Object.preventExtensions({
    name:"kim",
});

preventObj.age = 20;
delete preventObj.age;
console.log(preventObj);
console.log(Object.isExtensible(preventObj));
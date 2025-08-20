const obj = Object.freeze({
  name: 'lee',
});

obj.name = 10;
delete obj.name;
obj.age = 20;

// console.log(Object.isFrozen(obj));
// console.log(obj);

const sealedObj = Object.seal({
  // 프로퍼티의 추가와 삭제만 안됨
  name: 'kim',
});

sealedObj.name = 'park';
delete sealedObj.name;
sealedObj.age = 20;
console.log(sealedObj);
console.log(Object.isSealed(sealedObj));

// 프로퍼티의 추가만 방지
const preventObj = Object.preventExtensions({
  name: 'go',
});

preventObj.name = 20;
delete preventObj.name;
console.log(preventObj);

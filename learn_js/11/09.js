// freeze => 프로퍼티의 변경, 삭제, 추가 불가.
const frozenObj = Object.freeze({
  name: 'kim',
});
frozenObj.name = 10; // 변경 불가
delete frozenObj.name; // 삭제 불가
frozenObj.age = 20; // 추가 불가
console.log(Object.isFrozen(frozenObj));
console.log(frozenObj);

// seal => 프로퍼티의 삭제, 추가 불가.
const sealedObj = Object.seal({
  name: 'kim',
});
sealedObj.name = 'park'; // 변경 가능
delete sealedObj.name; // 삭제 불가
sealedObj.age = 20; // 추가 불가.
console.log(Object.isSealed(sealedObj));
console.log(sealedObj);

// preventExtensions => 프로퍼티의 추가 불가.
const preventObj = Object.preventExtensions({
  name: 'kim',
});
preventObj.name = 'park'; // 변경 가능
delete preventObj.name; // 삭제 가능
preventObj.age = 20; // 추가 불가.
console.log(Object.isExtensible(preventObj)); //확장이 가능한지 안한지 알 수 있는 메서드.
console.log(preventObj);

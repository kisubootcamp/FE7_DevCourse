// 1.10 객체의 불변성

// Object.freeze()로 만든 객체는 수정,추가,삭제 다 안됨
// freeze 되어있는 객체인지 true, false 로 알 수 있는 건 Object.isFrozen() 이다
const frozenObj = Object.freeze({
  name: "kim",
});
console.log(frozenObj);

console.log(Object.isFrozen(frozenObj));

// 프로퍼티의 추가와 삭제만 안됨
// 변경은 되는 게 Object.seal()
// 얘도 Object.isSealed() 있음
const sealedObj = Object.seal({
  name: "kim",
});

sealedObj.name = "park";
delete sealedObj.name;
sealedObj.age = 20;
console.log(sealedObj);
console.log(Object.isSealed(sealedObj));

// 프로퍼티의 추가만 방지
const preventObj = Object.preventExtensions({
  name: "kim",
});

delete preventObj.name;
console.log(preventObj);
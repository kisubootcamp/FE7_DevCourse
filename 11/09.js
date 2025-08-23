const obj = Object.freeze({
  name: "kim",
});

obj.name = 10;
delete obj.name;

console.log(Object.isFrozen({}));

const sealObj = Object.seal({
  // 프로퍼티의 추가와 삭제만 안됨.
  name: "kim",
});

// sealObj.name = "park";
// delete sealObj.name;
// sealObj.age = 20;
// console.log(sealObj);

// 프로퍼티의 추가만 방지
const preventObj = Object.preventExtensions({
  name: "kim",
});

preventObj.name = "park";
delete preventObj.name;
console.log(preventObj);

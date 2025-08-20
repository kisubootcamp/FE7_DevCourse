// 객체의 불변성
// freeze 추가 수정 삭제 모두 불가
const obj = Object.freeze({
  name: "kim",
});

//freeze이후 해당 객체는 아래 내용이 모두 적용되지 않음 (추가,수정,삭제)
obj.name = 10;
delete obj.name;
obj.age = 20;

//확인
console.log(Object.isFrozen(obj)); // 프리즈 상태인가?
console.log(obj);

////////////////////////////////////////////////////////////
// seal : freeze보단 약함, 추가랑 삭제만 안되고 수정은 가능
const sealedObj = Object.seal({
  name: "kim",
});

sealedObj.name = 10;
delete sealedObj.name;
sealedObj.age = 20;

//확인
console.log(Object.isSealed(sealedObj));
console.log(sealedObj);

////////////////////////////////////////////////////////////
// prevent : 가장 약함, 추가만 방지
const preventObj = Object.preventExtensions({
  name: "kim",
  age: 99,
});

preventObj.name = 10;
delete preventObj.name;
preventObj.age = 20;

//확인
console.log(preventObj);

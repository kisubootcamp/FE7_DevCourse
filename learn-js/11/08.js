// 객체는 원래 불변성을 지니고있지 않다.
// 그런 객체를 불변으로 만들라면?

const frozenObj = Object.freeze({
	name: "kim",
});

frozenObj.name = 10;
delete frozenObj.name;

console.log(frozenObj); // { name: 'kim' }
// 외부조작이 불가능

// 그래서 이게 불변객체인가 확인하는 방법?
console.log(Object.isFrozen(frozenObj)); // true

// freeze보다 약한 메서드 seal
// 프로퍼티의 추가와 삭제가 안되게 하기
const sealedObj = Object.seal({
  name: "kim",
});

sealedObj.name = "park";
delete sealedObj.name;
sealedObj.age = 29;
console.log(sealedObj); // { name: 'park' }
console.log(sealedObj.age); // undefined

// 가려진 객체인지?
console.log(Object.isSealed(sealedObj)); // true

// seal보다 약한 메서드 preventExtensions
const preventObj = Object.preventExtensions({
	name: "kim",
});
preventObj.name = "park";
delete preventObj.name;
preventObj.age = 29;
console.log(preventObj); // {}
console.log(preventObj.age); // undefined

// 얘는 판별하는 메서드가 업슴???
console.log(Object.isExtensible(preventObj)) // false
// 확장이 불가능하므로 false가 맞음


// 어쩔때 이렇게 불변화 시키냐?
// 초기 설정값들을 미리 정해놓고 외부요인에 의해 변경되징않도록 하고싶을 때
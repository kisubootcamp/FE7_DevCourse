// 1.9 접근자 프로퍼티 (getter / setter)

const person = {
  firstName: "sooyeon",
  lastName: "byeon",
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value){
    [this.firstName, this.lastName] = value.split(" ");
  },
};

person.fullName = "yeonsoo byeon";
console.log(person.fullName);

// 1.10 객체의 불변성
// 기본적으로 객체는 불변성을 지키지 않음
// ㄴ 3가지를 set랑 같이 기억

// 1.10.1 freeze :: 변경, 삭제, 추가 전부 불가능
const obj = Object.freeze({
  name: "kim",
});
obj.name = 10;
delete obj.name;
obj.age = 20;

console.log(Object.isFrozen(obj));
// isFrozen :: freeze가 되었는지 확인하는 메서드, set : true/false
console.log(obj);

// 1.10.2 seal :: 삭제, 추가 불가능 ( 변경만 가능 )
const sealedObj = Object.seal({
  name: 'yeon',
});

sealedObj.name = "soo";
delete sealedObj.name;
sealedObj.age = 20;
console.log(sealedObj);
console.log(Object.isSealed(obj));
// isSealed :: check

// 1.10.3 preventExtensions :: 추가만 불가능 ( 삭제, 변경 가능 )
const preventObj = Object.preventExtensions({
   name: 'yeon',
})

delete preventObj.name;
preventObj.age = 20;
console.log(preventObj);
console.log(Object.isExtensible(obj)); //false
// isExtensible :: 확장 여부?
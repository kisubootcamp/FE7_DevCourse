// 객체의 불변화
const obj = Object.freeze({
  name: "kim",
});

obj.name = 19;
delete obj.name;
obj.age = 20;
console.log(obj); // { name: 'kim' }
// obj는 Object.freeze()로 불변화되어 속성을 변경하거나 추가할 수 없다.
// Object.freeze()는 객체의 속성을 읽기 전용으로 만들어 수정할 수 없게 한다.
// 이로 인해 obj.name은 변경되지 않고, age 속성도 추가되지 않는다.

console.log(Object.isFrozen(obj)); // true
// Object.isFrozen()를 사용하여 객체가 불변화되었는지 확인할 수 있다.

//

const sealedObj = Object.seal({
  // 프로퍼티의 추가와 삭제만 불가능
  name: "kim",
});

sealedObj.name = "park"; // 수정 가능
sealedObj.age = 20; // 추가 가능
delete sealedObj.age; // 삭제 불가능
console.log(sealedObj); // { name: 'kim' }
// Object.seal()은 객체의 속성을 수정할 수 있지만,
// 새로운 속성을 추가하거나 기존 속성을 삭제할 수 없게 한다.

//

const preventObj = Object.preventExtensions({
  // 프로퍼티의 추가만 불가능
  name: "kim",
});

// isExtensible()를 사용하여 객체가 확장 가능한지 확인할 수 있다.

//

// 객체의 불변화 활용 사례

// 앱의 초기 설정 데이터를 고정해놓을 때 사용
// 외부 요인에 의해 변경되지 않도록 하고 싶을 때 사용
// 예: 관리자의 권한, 사이트의 설정된 값들, 서버와 관련된 주소들

// enum
const Roles = Object.freeze({
  ADMIN: "admin",
  USER: "user",
  GUEST: "guest",
});

const config = Object.freeze({
  apiUrl: "https://api.example.com",
  maxRetries: 3,
  timeout: 5000,
});

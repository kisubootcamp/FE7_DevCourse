// 얕은 복사
// 복사한 원본 데이터를 조작했을 떄, 복사의 대상이 되는 값이 같이 변경
// 주소를 참조

const arr = ["a"];
const arr2 = arr;

arr.push("b");
console.log(arr, arr2);

// 객체를 복사(병합) 이것도 얕은복서
const original = { name: "kim", age: 20 };
const original2 = { age: 40, gender: "male", addr: { zipcode: 111 } };

const shallowCopy = original;
const shallowCopy2 = Object.assign({}, original, original2);
const shallowCopy3 = { ...original, ...original2 };

shallowCopy2.addr.zipcode = 50; // orinial2의 addr의 zipcode까지 50으로 바뀐다!
// 즉, 같은 주소값을 가지고 있는 얕은 복사라는 뜻
console.log(original);
console.log(original2);
console.log(shallowCopy2);
console.log(shallowCopy3);

// 깊은 복사: 참조 주소값이 아닌, 그 값 자체가 들어감

//고전적 방법
const deepCopy = JSON.parse(JSON.stringify(original2));
// original2를 문자열로 바꾼 후, 그걸 다시 JSON 객체로 변환

deepCopy.addr.zipcode = 10;
console.log(original2);
console.log(deepCopy);

//최근 방법
//structuredClone : JS는 아니고, 웹 API에서 지원함 웹브라우저가 최신이 아니면 지원하지 않을 수 있음
const deepCopy2 = structuredClone(original2); //깊은복사

deepCopy2.addr.zipcode = 70;
console.log(original2);
console.log(deepCopy2);

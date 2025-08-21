// function removeDuplicateValues(obj) {
//   const values = Object.values(obj);
//   const duplications = values.filter((ele, i) => values.indexOf(ele) !== i);

//   const filter = {};
//   Object.entries(obj).forEach(([k, v]) => {
//     if (!duplications.includes(v)) filter[k] = v;
//   });
//   return filter;
// }

// const obj = { a: 1, b: 2, c: 1, d: 3 };
// console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

// const obj2 = { x: 5, y: 5, z: 10 };
// console.log(removeDuplicateValues(obj2)); // { z: 10 }

// const obj3 = { p: 1, q: 1, r: 1 };
// console.log(removeDuplicateValues(obj3)); // {}

// const obj4 = { m: 3, n: 4, o: 3 };
// console.log(removeDuplicateValues(obj4)); // { n: 4 }

function deepEqual(obj1, obj2) {
	const [k1, v1, k2, v2] = [[], [], [], []];
	Object.entries(obj1).forEach(([k, v]) => {
		k1.push(k);
		v1.push(v);
	});
	Object.entries(obj2).forEach(([k, v]) => {
		k2.push(k);
		v2.push(v);
	});

	let isKeySame = true;
	for (const k in k1) {
		if (!isKeySame && !k2.includes(k)) {
			isKeySame = false;
			return isKeySame;
		}
	}

	// const k1 = Object.keys(obj1).sort((a, b) => a - b);
	// const k2 = Object.keys(obj2).sort((a, b) => a - b);

	// const v1 =2번 어렵어워
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false

// 객체를 **재귀적으로 동결**하는 함수를 작성하세요.
// 함수 실행 후, 모든 중첩 객체가 `Object.isFrozen`으로 `true`가 되어야 합니다.
function deepFreeze(obj) {
	let curr = obj;
	Object.entries(curr).forEach(([k, v]) => {
		if (!curr) return;
		if (typeof v === "object") {
      Object.freeze(curr);
			curr = curr[k];
			deepFreeze(curr);
		} else {
			Object.freeze(curr);
		}
	});
	return curr;
}
const obj = { a: { b: 1 } };
deepFreeze(obj);

obj.a.b = 2; // 실패
console.log(obj.a.b); // 1
console.log(Object.isFrozen(obj)); // true
console.log(Object.isFrozen(obj.a)); // true

// 대상 객체에 읽기 전용 데이터 프로퍼티를 추가하는 함수를 작성하세요.
function defineReadOnly(obj, id, num) {
	return Object.defineProperty(obj, id, {
		value: num,
		writable: false,
		configurable: false,
		enumerable: true,
	});
}

const person = { name: "Alice" };
defineReadOnly(person, "id", 1001);

console.log(person); // { name: "Alice", id: 1001 }
person.id = 999; // 무시(엄격 모드면 에러)
delete person.id; // 실패
console.log(person.id); // 1001

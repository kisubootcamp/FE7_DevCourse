function removeDuplicateValues(obj) {
	// const values = Object.values(obj);
	// // 에너그램? 비슷하게 구성. 없는 키는 0으로 세팅 후 1 더하기
	// const freq = values.reduce((m, v) => {
	// 	m[v] = (m[v] || 0) + 1; // { '1': 2, '2': 1, '3': 1 }
	// 	return m;
	// }, {});

	const freq = Object.values(obj).reduce((m, v) => {
		m[v] = (m[v] || 0) + 1;
		return m;
	}, {});

	return Object.fromEntries(
		Object.entries(obj).filter(([_, v]) => {
			return freq[v] === 1;
		}),
	);

	const entries = Object.entries(obj);
	const out = entries.filter(([_, v]) => {
		// 여기서 _는 사용되지 않는 변수?에 작성
		return freq[v] === 1;
	});
	const result = Object.fromEntries(out);
	return result;
}

const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

const obj2 = { x: 5, y: 5, z: 10 };
console.log(removeDuplicateValues(obj2)); // { z: 10 }

const obj3 = { p: 1, q: 1, r: 1 };
console.log(removeDuplicateValues(obj3)); // {}

const obj4 = { m: 3, n: 4, o: 3 };
console.log(removeDuplicateValues(obj4)); // { n: 4 }

function deepEqual(obj1, obj2) {
	// 동일한 객체라면?
	if (obj1 === obj2) return true;

	// 둘다 null 값이라면?
	if (obj1 === null || obj2 === null) return false;

	// 둘다 타입이 객체가 아니라면?
	if (typeof obj1 !== "object" || typeof ob2 !== "object") return false;

	const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);

	// 키값 길이가 다르다면?
	if (obj1Keys.length !== obj2Keys.length) return false;
	for (const key of obj1keys) {
		if (!deepEqual(obj1[key], obj2[key])) return false;
	}

	return true;
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false

// 객체를 **재귀적으로 동결**하는 함수를 작성하세요.
// 함수 실행 후, 모든 중첩 객체가 `Object.isFrozen`으로 `true`가 되어야 합니다.
function deepFreeze(obj) {
  // 일딴 얼리고 시작
	Object.freeze(obj);
	for (const key in obj) {
		const value = obj[key];
		if (value !== null && typeof value === "object") {
			if (!Object.isFrozen(value)) deepFreeze(value);
		}
	}
	return obj;
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

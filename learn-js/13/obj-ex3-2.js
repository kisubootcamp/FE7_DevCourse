function deepEqual(obj1, obj2) {
	// // 동일한 객체라면?
	// if (obj1 === obj2) return true;

	// // 둘다 null 값이라면?
	// if (obj1 === null || obj2 === null) return false;

	// // 둘다 타입이 객체가 아니라면?
	// if (typeof obj1 !== "object" || typeof ob2 !== "object") return false;

	const obj1Keys = Object.keys(obj1);
	const obj2Keys = Object.keys(obj2);

	// 키값 길이가 다르다면?
	if (obj1Keys.length !== obj2Keys.length) return false;
	for (const key of obj1Keys) {
		if (!deepEqual(obj1[key], obj2[key])) return false;
	}

	return true;
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false

// n차원 배열을 1차원 배열로 평탄화하는 함수를 작성하세요. 배열의 모든 요소를 순회하면서 배열인 요소를 만나면 재귀적으로 평탄화해야 합니다.
{
	function flattenArray(arr) {
		// 여기에 코드를 작성하세요
		const out = arr.flat(Infinity);
		return out;
	}

	console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
	// 출력: [1, 2, 3, 4, 5, 6, 7]

	console.log(flattenArray([1, [], [2, 3, []], [4, [5, [6]]]]));
	// 출력: [1, 2, 3, 4, 5, 6]

	console.log(flattenArray([[[]]]));
	// 출력: []

	console.log(flattenArray([1, [2, [3, [4, [5]]]]]));
	// 출력: [1, 2, 3, 4, 5]

	console.log(flattenArray([1, 2, 3]));
	// 출력: [1, 2, 3]
}

{
	function groupBy(arr, key) {
		// 여기에 코드를 작성하세요
	}

	const people = [
		{ name: "John", age: 20, city: "New York" },
		{ name: "Jane", age: 20, city: "Boston" },
		{ name: "Mark", age: 25, city: "New York" },
		{ name: "Mary", age: 25, city: "Boston" },
		{ name: "James", age: 30, city: "New York" },
	];

	console.log(groupBy(people, "age"));
	// 출력: {
	//   '20': [
	//     { name: 'John', age: 20, city: 'New York' },
	//     { name: 'Jane', age: 20, city: 'Boston' }
	//   ],
	//   '25': [
	//     { name: 'Mark', age: 25, city: 'New York' },
	//     { name: 'Mary', age: 25, city: 'Boston' }
	//   ],
	//   '30': [
	//     { name: 'James', age: 30, city: 'New York' }
	//   ]
	// }

	console.log(groupBy(people, "city"));
	// 출력: {
	//   'New York': [
	//     { name: 'John', age: 20, city: 'New York' },
	//     { name: 'Mark', age: 25, city: 'New York' },
	//     { name: 'James', age: 30, city: 'New York' }
	//   ],
	//   'Boston': [
	//     { name: 'Jane', age: 20, city: 'Boston' },
	//     { name: 'Mary', age: 25, city: 'Boston' }
	//   ]
	// }

	// 빈 배열 테스트
	console.log(groupBy([], "age"));
	// 출력: {}

	// 존재하지 않는 키로 그룹화
	console.log(groupBy(people, "country"));
	// 출력: { 'undefined': [...] }
}

// 배열에서 중복된 요소를 제거하고, 각 요소의 등장 빈도수를 계산하는 함수를 작성하세요.
{
	function getFrequency(arr) {
		// 여기에 코드를 작성하세요
		const reduce = arr.reduce(
			([u, f], v) => {
				f[v] = (f[v] || 0) + 1;
				if (!u.includes(v)) u.push(v);
				return [u, f];
			},
			[[], {}],
		);

		const result = {};
		result.unique = reduce[0];
		result.frequency = reduce[1];

		return result;
	}

	console.log(getFrequency([1, 2, 3, 1, 2, 1, 4, 5, 4]));
	// 출력: {
	//   unique: [1, 2, 3, 4, 5],
	//   frequency: { '1': 3, '2': 2, '3': 1, '4': 2, '5': 1 }
	// }

	console.log(getFrequency(["a", "b", "a", "c", "b", "a"]));
	// 출력: {
	//   unique: ['a', 'b', 'c'],
	//   frequency: { 'a': 3, 'b': 2, 'c': 1 }
	// }

	console.log(getFrequency([true, false, true, true]));
	// 출력: {
	//   unique: [true, false],
	//   frequency: { 'true': 3, 'false': 1 }
	// }

	console.log(getFrequency([]));
	// 출력: { unique: [], frequency: {} }

	console.log(getFrequency([1]));
	// 출력: { unique: [1], frequency: { '1': 1 } }
}

// 배열을 주어진 스텝만큼 오른쪽으로 회전시키는 함수를 작성하세요. 음수 스텝은 왼쪽 회전을 의미합니다.
{
	function rotateArray(arr, steps) {
		// 여기에 코드를 작성하세요
		if (steps > 0) {
			let cnt = 0;
			while (cnt < steps) {
				const pop = arr.pop();
				arr = [pop, ...arr];
				cnt++;
			}
		} else {
      console.log(steps)
      let step = steps * -1
			let cnt = 0;
			while (cnt < step) {
				const pop = arr.shift();
        console.log(pop)
        console.log(arr)
				cnt++;
			}
		}

		return arr;
	}

	const input = [1, 2, 3, 4, 5];
	console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
	console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]
}

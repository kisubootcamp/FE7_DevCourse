// 주어진 문자열에서 특정 문자를 제거하는 함수를 작성하시오.
function removeChar(string, char) {
	let result = "";
	for (const char2 of string) {
		if (char2 !== char) result += char2;
	}
	// for (let i = 0; i < string.length; i++) {
	// 	if (string[i] !== char) result += str[i];
	// }
	console.log(result);
}
removeChar("hello world", "o"); // "hell wrld"

// 주어진 배열의 요소를 반전 시키는 함수를 작성하시오.
function reverseArray(arr) {
	const result = [];
	for (let i = arr.length; i > 0; i--) {
		result.push(arr[i - 1]);
	}
	console.log(result);
}
// 나중에는 이렇게 풀 수 있음
const reversedArray = (arr) => arr.reverse();
reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

// 주어진 배열에서 특정 숫자가 있는지 확인하는 함수를 작성하시오.
function containsNumber(numArr, num) {
	let isExist = false;
	for (const number of numArr) {
		if (number === num) {
			isExist = true;
			break;
		}
	}
	console.log(isExist);
}
containsNumber([1, 2, 3, 4, 5], 5); // true
containsNumber([1, 2, 3, 4, 5], 7); // false

// 두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃 소문자만 온다고 가정)
function isAnagrams(string1, string2) {
	if (string1.length !== string2.length) return false; // 전제조건 : 문자열 길이가 다르면 애너그램 조건도 안맞음
	const charCount = {};
	// charCount.l = 1;
	// charCount.i = 1;
	// charCount.s = 1;
	// charCount.t = 1;
	// charCount.e = 1;
	// charCount.n = 1;
	// 단어가 몇 개인지 일단 세어서 객체에 지정해줌

	for (const char of string1) {
		charCount[char] = (charCount[char] || 0) + 1;
	}
	for (const char of string2) {
		// 0, null, "", false, undefined -> false
		if (!charCount[char]) return false;
		charCount[char]--;
		// 요게 있어야 애너그램인지 판별이 가능
	}

	return true;
}
console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("listen", "sslent")); // false
console.log(isAnagrams("fluster", "restful")); // true
console.log(isAnagrams("rat", "car")); // false
console.log(isAnagrams("aaa", "aaaa")); // false

// 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.
function twiceSum(arr, sum) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === sum) result.push([arr[i], arr[j]]);
		}
	}
	console.log(result);
}
// 알고리즘 문제에서 이렇게 풀면 탈락임!!! 시간테스트 ㅠ
function twiceSums(numArr, target) {
	const pairs = [];
	const seen = new Set(); // 아직 안배움

	for (const num of numArr) {
		const completed = target - num;
		console.log(completed);
		console.log(seen);
		if (seen.has(completed)) {
			pairs.push([completed, num]);
		}
		seen.add(num);
	}

	console.log(pairs);
	return pairs;
}

twiceSums([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
twiceSums([1, 2, 3, 4, 5], 9); // [[4, 5]]
twiceSums([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]

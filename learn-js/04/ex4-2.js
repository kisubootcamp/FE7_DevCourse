// 주어진 문자열에서 특정 문자를 제거하는 함수를 작성하시오.

function removeChar(string, char) {
	let result = "";
	for (const char2 of string) {
		if (char2 !== char) result += char2;
	}
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
	let result = "";
	for (const char1 of string1) {
		if (string1.length !== string2.length) break;
		for (const char2 of string2) {
			if (char1 === char2) {
				result += char2;
				break;
			}
		}
	}
	console.log(string1 === result);
}
isAnagrams("listen", "silent"); // true
isAnagrams("fluster", "restful"); // true
isAnagrams("rat", "car"); // false
isAnagrams("aaa", "aaaa"); // false

// 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.
function twiceSum(arr, sum) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const a = arr[i];
		for (let j = i + 1; j < arr.length; j++) {
			const b = arr[j];
			if (a + b === sum) result.push([a, b]);
		}
	}
	console.log(result);
}
twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]

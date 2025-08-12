// 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
const i = "aaabbbccc";
const o = "a3b3c3";

const i2 = "aabbaa";
const o2 = "a2b2a2";

const i3 = "abbbffd";
const o3 = "a1b3f2d1";

const i4 = "aabaa";
const o4 = "a2b1a2"; // a4b1

function zipStr(input) {
	let currentChar = input[0]; // a
	let count = 1; // 문자의 갯수를 세는 변수
	let result = "";

	for (let i = 1; i <= input.length; i++) {
		if (input[i] === currentChar) count++;
		else {
			result += currentChar + count; // a3
			currentChar = input[i]; //b
			count = 1;
		}
	}

	return result;
}
const result = zipStr(i);
console.log(result);

// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 매개변수는 항상 공백 없이 소문자 알파뱃만 넘어온다고 가정합니다.
function isPalindrome(str) {
	let reverseStr = "";
	for (let i = str.length - 1; i >= 0; i--) {
		reverseStr += str[i];
	}

	// 강사님 풀이
	// 배열의 갯수만큼 안해도 됨. 가운데 기준으로 이전/다음이 같은지만 확인하면 됨
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
			return false;
		}
	}
	return true;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("world")); // false

// 어려운 버전... 저에겐 toLowerCase()와 정규식이 있사옵니다
function isPalindrome2(str) {
	const lowerStr = str.toLowerCase().replaceAll(/[,.!?' ]/g, "");
	let reverseStr = "";
	for (let i = lowerStr.length - 1; i >= 0; i--) {
		reverseStr += lowerStr[i];
	}
	// return lowerStr === reverseStr;

	// 강사님 풀이
	// 알파벳만 남기고 싹 지워버리기
	const cleaned = str.toLowerCase().replaceAll(/[^a-z]/g, ""); // [^a-z]만 남기고
	const reversed = cleaned.split("").reverse().join("");
	return cleaned === reversed;
}
console.log(isPalindrome2("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome2("Was it a car or a cat I saw?")); // true
console.log(isPalindrome2("Hello, world!")); // false
console.log(isPalindrome2("No 'x' in Nixon")); // true

// 두 정수를 전달 받아서 최대 공약수를 구하는 함수를 구현하세요.
// 최대 공약수는 공통된 약수 중 가장 큰 수를 의미합니다.
const gcd = (a, b) => {
	// const div1 = [],
	// 	div2 = [];
	// for (let i = 0; i <= a; i++) {
	// 	if (a % i === 0) div1.push(i);
	// 	if (b % i === 0) div2.push(i);
	// }

	// let greatestFactor; // 최댓값만 저장쓰
	// for (let fac1 of div1) {
	// 	for (let fac2 of div2) {
	// 		if (fac1 === fac2) greatestFactor = fac1;
	// 	}
	// }

	// 풀고보니 유클리드 호제법을 이제 봄...
	// 구글링 해보니 구하는 방법이 이렇다고 함
	// 두 수 입력: 최대공약수를 구하고자 하는 두 자연수 a와 b를 입력받습니다. (단, a > b 라고 가정합니다.)
	// 나눗셈: 큰 수(a)를 작은 수(b)로 나눕니다.
	// 나머지 확인: 나눗셈의 나머지가 0인지 확인합니다.
	// 나머지가 0인 경우: 작은 수(b)가 최대공약수입니다.
	// 나머지가 0이 아닌 경우: 작은 수(b)를 새로운 큰 수(a)로, 나머지를 새로운 작은 수(b)로 하여 2단계로 돌아갑니다.
	// 반복: 나머지가 0이 될 때까지 2단계와 3단계를 반복합니다.

	// const r = a % b;
	// if (r === 0) return b;
	// return gcd(b, r);

	// 더 짧게 가능
	//a를 b로 나눈 나머지 r과 b의 최대공약수가 같다.
	// 이때 나머지가 0이 되면 나누는 수가 최대공약수다
	if (b === 0) return a;
	return gcd(b, a % b);
};
console.log(gcd(56, 98)); // 14
console.log(gcd(101, 10)); // 1
console.log(gcd(15, 5)); // 5
console.log(gcd(100, 75)); // 25
console.log(gcd(18, 24)); // 6

// 주어진 배열을 오름차순으로 정렬하는 함수를 작성하시오.
const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
};

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
// 좀 어려운 것 같으면은 시각적으로 구현해주는 사이트 참고 https://visualgo.net/


function gcd(n, m) {
	const r = n % m;
	console.log(r)
	if (r === 0) return m;
	return gcd(m, r);
}
console.log(gcd(2,5))
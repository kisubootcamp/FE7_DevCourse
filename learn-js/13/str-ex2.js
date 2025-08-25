// 문제 설명: 주어진 문자열이 회문인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 확인해야 합니다.
{
	const str = "A man a plan a canal Panama";
	const reverse = [...str].reverse().join("").replace(/ /g, "").toLowerCase();
	const isReversed = str.replace(/ /g, "").toLowerCase() === reverse;
	console.log(isReversed);
}

// 문제 설명: 주어진 문자열에서 모음(a, e, i, o, u)의 개수를 세세요.
{
	const str = "JavaScript is awesome!";
	const regStr = str.match(/[aeiou]/g);
	console.log(regStr.length);
}

// 문제 설명: 두 문자열이 애너그램인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 비교해야 합니다.
{
	const str1 = "listen";
	const str2 = "silent";
	const str1Ana = [...str1].reverse().join("").replace(/ /g, "").toLowerCase();
	const str2Ana = str2.toLowerCase().split("").sort().join("");
	const isAnagram = str1Ana === str2Ana;
	console.log(isAnagram);
}

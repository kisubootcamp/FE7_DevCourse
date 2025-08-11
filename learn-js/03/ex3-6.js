/*
[연습문제 - 암스트롱 수 구하기]
난이도 ★★★★★

100부터 999까지 암스트롱 수를 구하세요

&암스트롱 수란?

암스트롱의 수는 세 자리의 정수 중에서 각 자리의 수를 세 제곱한 수의 합과 자신이 같은 수를 말합니다. 
예를 들어 153 = 1 + 125 + 27 입니다. 
이와 같은 수를 암스트롱의 수라고 말합니다.
*/

for (let i = 100; i <= 999; i++) {
	let num = i;

	let fst = (num - (num % 100)) / 100;
	let sec = ((num % 100) - (num % 10)) / 10;
	let trd = num % 10;

	if (num === fst ** 3 + sec ** 3 + trd ** 3) console.log(num);
}

// 강사님 답!! 한명도 이렇게 안풀었따고... 그런데 코딩테스트에서는 이렇게 풀지마세요 다중반복문이라 시간복잡도를 통과할 수 없음
for (let i = 1; i < 10; i++) {
	for (let j = 1; j < 10; j++) {
		for (let k = 1; k < 10; k++) {
			const sum = i * i * i + j * j * j + k * k * k;
			const origin = i * 100 + j * 10 + k;
			if (sum === origin) console.log(origin);
		}
	}
}

// 이렇게도 풀수도 있고... (이건 내생각)
for (let num = 100; num <= 999; num++) {
	let char = `"${num}"`;
	let hund = char[1];
	let ten = char[2];
	let one = char[3];

	const sum = one ** 3 + ten ** 3 + hund ** 3;
	const origin = one * 1 + ten * 10 + hund * 100;

	if (sum === origin) console.log(origin);
}

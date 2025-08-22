const str = "Hello, World!";

// 문제설명: 주어진 문자열의 길이를 구하세요.
console.log(str.length);

// 문제설명: 주어진 문자열의 첫 번째 문자를 반환하세요.
console.log(str.charAt(0));

// 문제설명: 문자열에서 "o"의 첫 번째 인덱스를 구하세요.
console.log(str.indexOf("o"));

// 문제설명: 문자열에서 "World" 부분만 잘라내세요.
console.log(str.substring(7, 12));

// 문제설명: 주어진 문자열을 모두 대문자로 변환하세요.
{
	const str = "hello";
	console.log(str.toUpperCase());
}

// 문제설명: 주어진 문자열의 양쪽 공백을 제거하세요.
{
	const str = "   Hello, World!   ";
	// 여기에 코드를 작성하세요
	console.log(str.trim());
}

// 문제설명: 문자열을 쉼표(,)로 분할하여 배열로 만드세요.
{
	const str = "apple,banana,cherry";
	console.log(str.split(","));
}

// 문제설명: 문자열에서 "World"를 "JavaScript"로 교체하세요.
console.log(str.replace("World", "JavaScript"));

// 문제설명: 문자열에 "Java"가 포함되어 있는지 확인하세요.
{
	const str = "I love JavaScript";
	console.log(str.includes("Java"));
}

// 문제설명: 문자열이 "Hello"로 시작하는지 확인하세요.
console.log(str.startsWith("Hello"));

// 문제설명: 문자열이 "!"로 끝나는지 확인하세요.
console.log(str.endsWith("!"));

// 문제설명: 문자열을 3번 반복하여 새로운 문자열을 만드세요.
{
	const str = "Hello";
	console.log(str.repeat(3));
}

// 문제설명: 문자열에서 "ain"이 포함된 부분을 찾아 배열로 반환하세요.
{
	const str = "The rain in Spain stays mainly in the plain.";
	console.log(str.match(/ain/g));
}

// 문제설명: 문자열에서 "fox"의 위치를 찾으세요.
{
	const str = "The quick brown fox jumps over the lazy dog.";
	// console.log(str.indexOf("fox"));
	console.log(str.search(/fox/));
}

// 문제설명: 문자열 "5"를 길이 2로 만들어서 앞에 0을 채우세요.
{
	const str = "5";
	console.log(str.padStart(2, 0));
}

// 문제설명: 문자열 "5"를 길이 2로 만들어서 뒤에 0을 채우세요.
{
	const str = "5";
	console.log(str.padEnd(2, 0));
}

// 문제설명: 문자열 "istanbul"을 터키어 규칙에 맞춰 대문자로 변환하세요.
{
	const str = "istanbul";
	console.log(str.toLocaleUpperCase("tr-TR"));
}

// 문제설명: 문자열 객체의 원시 값을 반환하세요.
{
	const str = new String("Hello, World!");
	console.log(str.valueOf());
}

// 문제설명: 문자열에서 중복된 문자를 제거하여 새로운 문자열을 만드세요.
{
	const str = "banana";
	console.log([...str].filter((c, i) => str.indexOf(c) === i).join(""));
}

// 문제설명: 문자열의 각 문자의 대소문자를 반전시킨 새로운 문자열을 만드세요.
console.log(
	[...str].reduce((a, c) => {
		if (c.toLowerCase() === c) a += c.toUpperCase();
		else a += c.toLowerCase();
		return a;
	}, ""),
);
// 혹은
console.log(
	[...str].map((char) =>
		char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
	),
);

// 문제설명: 주어진 문자열에서 "a"의 개수를 세세요.
{
	const str = "banana";
	console.log(str.match(/a/g).length);
}

// 문제설명: 주어진 배열의 요소를 공백으로 구분하여 하나의 문자열로 결합하세요.
{
	const words = ["Hello", "world!"];
	console.log(words.join(" "));
}

// 문제설명: 두 문자열이 대소문자를 무시하고 동일한지 확인하세요.
{
	const str1 = "Hello";
	const str2 = "hello";
	console.log(str1.toUpperCase() === str2.toUpperCase());
}

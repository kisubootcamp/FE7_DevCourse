{
    const str = "Hello, World!";
    console.log(str.length);
}

{
    const str = "Javascript";
    console.log(str.charAt(0));
}

{
    const str = "Hello, World!";
    console.log(str.indexOf("o"));
}
{
    const str = "Hello, World!";
    console.log(str.substring(7, 12));
}
{
    const str = "hello";
    console.log(str.toUpperCase());
}
{
    const str = "   Hello, World!   ";
    console.log(str.trim())
}
{
    const str = "apple,banana,cherry";
    console.log(str.split(","));
}
{
    const str = "Hello, World!";
    console.log(str.replace("World", "Javascript"));
}
{
    const str = "I love JavaScript";
    console.log(str.includes("Java"));
}
{
    const str = "Hello, World!";
    console.log(str.startsWith("Hello"));
}
{
    const str = "Hello, World!";
    console.log(str.endsWith("!"));
}
{
    const str = "Hello";
    console.log(str.repeat(3));
}
{
    const str = "The rain in Spain stays mainly in the plain.";
    console.log(str.match(/ain/g));
}
{
    const str = "The quick brown fox jumps over the lazy dog.";
    console.log(str.search(/fox/));
}
{
    const str = "5";
    console.log(str.padStart(2, "0"));
}
{
    const str = "5";
    console.log(str.padEnd(2, "0"));
}
{
    const str = "istanbul";
    console.log(str.toLocaleUpperCase("tr-TR")); // ko-KR, en-US
    console.log(Intl.DateTimeFormat().resolvedOprtions().locale);
}
// 18. 원시 값 반환
{
    const str = new String("Hello, World!");
    console.log(str.valueOf());
}
// 19. 중복된 문자 제거
{
    const str = "banana";
    let uniqueChar = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!uniqueChar.includes(char)) {
            uniqueChar += char;
        }
    }
    console.log(uniqueChar);
}
// 20. 문자열 대소문자 변환
{
    const str = "Hello, World!";
    let uniqueChar = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            uniqueChar += char.toLowerCase();
        } else {
            uniqueChar += char.toUpperCase();
        }
    }
    console.log(uniqueChar);
}
// 20
{
    const str = "banana";
    const toggled = str.
    split("")
    .map((char) => char === char.toUpperCase() ? char.toUpperCase() : char.toUpperCase())
    .join("");
    console.log(toggled);
}
// 21. 특정 문자 개수 세기
{
    const str = "banana";
    console.log((str.match(/a/g) || []).length);
}
// 22. 공백으로 구분된 문자열 결합
{
    const words = ["Hello", "world!"];
    console.log(words.join(" "));
}
// 23. 대소문자 무시하고 문자열 비교
{
    const str1 = "Hello";
    const str2 = "hello";
    console.log(str1.toUpperCase() === str2.toUpperCase());
}
{
  // 1 - length
  const str = "Hello, World!";
  console.log(str.length);
}
{
  // 2 - chartAt(index)
  const str = "JavaScript";
  // console.log(str[0]);
  console.log(str.charAt(0));
}
{
  // 3 - indexOf
  const str = "Hello, World!";
  console.log(str.indexOf("o"));
}
{
  // 4 - substring
  const str = "Hello, World!";
  console.log(str.substring(7, 12));
}
{
  // 5 - toUpperCase
  const str = "hello";
  console.log(str.toUpperCase());
}
{
  // 6 - trim
  const str = "   Hello, World!   ";
  console.log(str.trim());
}
{
  // 7 -
  const str = "apple,banana,cherry";
  console.log(str.split(",b"));
}
{
  // 8 - replace
  const str = "Hello, World!";
  console.log(str.replace("World", "Javascript"));
}
{
  // 9 - includes
  const str = "I love JavaScript";
  console.log(str.includes("Java"));
}
{
  // 10 - startsWith
  const str = "Hello, World!";
  console.log(str.startsWith("Hello"));
}
{
  // 11 - endsWith
  const str = "Hello, World!";
  console.log(str.endsWith("!"));
}
{
  // 12 - repeat
  const str = "Hello";
  console.log(str.repeat(3));
}
{
  // 13
  const str = "The rAIN in Spain stays mainly in the plain.";
  console.log(str.match(/ain/g));
}
{
  // 14
  const str = "The quick brown fox jumps over the lazy dog.";
  console.log(str.search(/fox/));
}
{
  // 15
  const str = "25";
  console.log(str.padStart(2, "0"));
  // 10:1:1
  // 10:01:01
  // second < 10 ? '0' + second : second
}
{
  // 16
  const str = "5";
  console.log(str.padEnd(2, "0"));
}
{
  // 17
  const str = "istanbul";
  console.log(str.toLocaleUpperCase("tr-TR")); // ko-KR, en-US
  console.log(Intl.DateTimeFormat().resolvedOptions().locale);
}
{
  // 18
  const str = new String("Hello, World!");
  console.log(str.valueOf());
}
{
  // 19
  const str = "banana";
  let uniqueChar = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i]; // b -> a -> n ....
    if (!uniqueChar.includes(char)) {
      uniqueChar += char;
    }
  }
  console.log(uniqueChar);
  // 출력결과 : ban
}
{
  // 20
  const str = "Hello, World!";
  let uniqueChar = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i]; // b -> a -> n ....
    if (char == char.toUpperCase()) {
      uniqueChar += char.toLowerCase();
    } else {
      uniqueChar += char.toUpperCase();
    }
  }
  console.log(uniqueChar);
}
{
  // 20
  const str = "Hello, World!";
  const toggled = str
    .split("")
    .map((char) =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
  console.log(toggled);
}
{
  // 21
  const str = "banana";
  console.log((str.match(/a/g) || []).length);
}
{
  // 22
  const words = ["Hello", "world!"];
  console.log(words.join(" "));
}
{
  // 23
  const str1 = "Hello";
  const str2 = "hello";
  console.log(str1.toUpperCase() === str2.toUpperCase());
  // 여기에 코드를 작성하세요
}

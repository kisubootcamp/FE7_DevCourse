// 1. 문자열 압축

// 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
function compressString(input) {
    let compressed = "";
    let count = 1; // 문자의 개수를 세는 변수
    let currentChar = input[0];
    for (let i = 1; i <= input.length; i++) {
        if (input[i] === currentChar) count++;
        else {
            compressed += currentChar + count; // a3
            currentChar = input[i]; // b
            count = 1;
        }
    }
    return compressed;
}

console.log(compressString("aaabbbccc"));
console.log(compressString("aabbaa"));
console.log(compressString("abbbffd"));
console.log(compressString("aabaa"));


// **2. 팰린드롬 확인하기(쉬운 버전)**
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 매개변수는 항상 공백 없이 소문자 알파뱃만 넘어온다고 가정합니다.
function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("level"));   // true
console.log(isPalindrome("world"));   // false


// 3. 펠린드롬 확인하기 (어려운 버전)
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 알파벳 이외의 문자는 무시합니다.
function isPalindromeSentence(input) {
    const cleaned = input.toLowerCase().replace(/[^a-z]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

// 입출력
console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?"));  // true
console.log(isPalindromeSentence("Hello, world!"));                  // false
console.log(isPalindromeSentence("No 'x' in Nixon"));                // true


// 4. 최대 공약수(Greatest Common Divisor, GCD)
// 두 정수를 전달 받아서 최대 공약수를 구하는 함수를 구현하세요.
// 약수 -> 어떤 수 n을 나눴을 때, 나머지가 0이 되는 수
// (12의 약수 = 1, 2, 3, 4, 6, 12)
// (18의 약수 = 1, 2, 3, 6, 9, 18)
// 공약수 -> 공통된 약수
// 최대공약수 -> 6
// 최대 공약수 -> 공통된 약수 중 가장 큰 수

// 유클리드 호제법
// 두 자연수 a와 b(a > b)의 최대 공약수는
// a를 b로 나눈 나머지 r과 b의 최대 공약수와 같다.
// 이떄, 나머지가 0이 되면, 그때의 나누는 수가 최대 공약수다.

// GCD(a, b) = GCD(b, a mod b)

// GCD(48, 18)
// 48 / 18 = 몫 2, 나머지 12
// GCD (48, 18) = GCD(18, 12)
// 18 / 12 = 몫 1, 나머지 6
// GCD (18, 12) = GCD(12, 6)

// 12 / 6 = 몫 2, 나머지 0
// GCD (12, 6) = 6

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

console.log(gcd(56, 98)); // 14
console.log(gcd(101, 10)); // 1
console.log(gcd(15, 5)); // 5
console.log(gcd(100, 75)); // 25
console.log(gcd(18, 24)); // 6

function gcd2(a, b) {
    while (b !== 0) {
        let r = a % b;
        a = b;
        b = r;
    }
    return a;
}

// 5. 배열 정렬(버블 정렬)
// 주어진 배열을 오름차순으로 정렬하는 함수를 작성하시오.

function bubbleSort(numberArr) {
    for (let i = 0; i < numberArr.length; i++) {
        for (let j = 0; j < numberArr.length - 1 - i; j++) {
            if (numberArr[j] > numberArr[j+1]) {
                // swap
                const temp = numberArr[j];
                numberArr[j] = numberArr[j + 1];
                numberArr[j + 1] = temp;
            }
        }
    }
}
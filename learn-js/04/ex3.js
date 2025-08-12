// 1. 문자열 압축
// 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
function jam(str) {
    if (str.length === 0) return "";
    let str2 = "";
    let cnt = 1;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            cnt++;
        } else {
            str2 += str[i] + cnt;
            cnt = 1;
        }
    }
    return str2;
}
console.log(jam("aaabbbccc"));
console.log(jam("aabbaa"));
console.log(jam("abbbffd"));
console.log(jam("aabaa"));

// **2. 팰린드롬 확인하기(쉬운 버전)**

// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 매개변수는 항상 공백 없이 소문자 알파뱃만 넘어온다고 가정합니다.

function isPalindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// 입출력 예시
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("level"));   // true
console.log(isPalindrome("world"));   // false


// 3. 펠린드롬 확인하기 (어려운 버전)
// 주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. 팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다. 대소문자를 구분하지 않으며, 알파벳 이외의 문자는 무시합니다.
function isPalindromeSentence() {

}
// 입출력
console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?"));  // true
console.log(isPalindromeSentence("Hello, world!"));                  // false
console.log(isPalindromeSentence("No 'x' in Nixon"));                // true

// 4. 최대 공약수(GCD)
// 두 정수를 전달 받아서 최대 공약수를 구하는 함수를 구현하세요.
// 최대 공약수는 공통된 약수 중 가장 큰 수를 의미합니다.
// 예) 12 - 1, 2, 3, 4, 6 12  
//      18 - 1, 2, 3, 6, 9, 18 
// 약수 : 1, 2, 3, 6 
// 최대 공약수 6
// 유클리드 호제법

function gcd(n1, n2) {
    let min = n1;
    if (n2 < min) min = n2;
    let gcdn;
    for (let i = 1; i <= min; i++) {
        if (n1 % i === 0 && n2 % i === 0)
            gcdn = i;
    }
    console.log(gcdn);
}
// 입출력
gcd(56, 98); // 14
gcd(101, 10); // 1
gcd(15, 5); // 5
gcd(100, 75); // 25
gcd(18, 24); // 6

// 5. 배열 정렬(버블 정렬)
// 주어진 배열을 오름차순으로 정렬하는 함수를 작성하시오.
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]

// 1.
function compressString(input) {
  let compressed = '';
  let count = 1;
  let currentChar = input[0];

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === currentChar) count++;
    else {
      compressed += currentChar + count;
      currentChar = input[i];
      count = 1;
    }
  }
  return compressed;
}
console.log(compressString('aaabbbccc'));

// 2.
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
console.log(isPalindrome('racecar'));

// 3.
function isPalindromeSentence(input) {
  const cleaed = input.toLowerCase().replace(/[^a-z]/g, '');
  const revered = cleaed.split('').reverse().join('');
  return console.log(cleaed === revered);
}
isPalindromeSentence('Hello, world!');

// 4. 최대 공약수 (유클리드 호제법), Greatest Common Divisor
// 두 자연수 a와 b(a > b)의 최대 공약수는
// a를 b로 나눈 나머지 r과 b의 최대 공약수와 같다.
// 이때, 나머지가 0이되면, 그때의 나누는 수가 최대 공약수다.
// GCD(a, b) = GCD(b, a mod b)

// GCD(48, 18)
// 48 / 18 = 몫 2, 나머지 12
// GCD(48, 18) = GCD(18, 12)

// 18 / 12 = 몫 1, 나머지 6
// GCD(18, 12) = GCD(12, 6)
// 12 / 6 = 몫 2, 나머지 0
//GCD(12, 6) = 0

function gcd(a, b) {
  if (b === 0) return a;
  // 재귀함수
  return gcd(b, a % b);
}

function gcd2(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }
  return a;
}

console.log(gcd(18, 48));

// 5. 버블정렬
function bubbleSort(numberArr) {
  for (let i = 0; i < numberArr.length; i++) {
    for (let j = 0; j < numberArr.length - 1 - i; j++) {
      if (numberArr[j] > numberArr[j + 1]) {
        const temp = numberArr[j];
        numberArr[j] = numberArr[j + 1];
        numberArr[j + 1] = temp;
      }
    }
  }
  return numberArr;
}
console.log(bubbleSort([5, 3, 8, 1, 2]));

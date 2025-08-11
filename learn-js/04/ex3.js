// 1
const compress = (str) => {
  const map = {};
  let result = "";
  let prev = str[0];

  for (const c of str) {
    if (prev !== c) {
      result += `${prev}${map[prev]}`;
      map[prev] = 0;
      prev = c;
    }
    map[c] = (map[c] || 0) + 1;
  }

  result += `${prev}${map[prev]}`;

  return result;
};

// 2
const isPalindrome = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }

  return true;
};

// 2
const isPalindromes = (str) => {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[1] !== str[str.length - 1 - i]) return false;
  }

  return true;
};

// 3
function isPalindromeSentence(input) {
  const cleaned = input.toLowerCase().replace(/[^a-z]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

// 4. 최대 공약수 (Greatest Common Divisor, GCD)
// 약수 -> 어떤 수 n을 나눴을 때 나머지가 0이 되는 수
// 12의 약수 = 1, 2, 3, 4, 6, 12
// 18의 약수 = 1, 2, 3, 6, 9, 18
// 공약수 -> 공통된 약수 (1, 2, 3, 6)
// 최대공약수 -> 6

// 유클리드 호제법
// 두 자연수 a와 b(a > b)의 최대 공약수는
// a를 b로 나눈 나머지 r과 b의 최대 공약수와 같다.
// 이떄, 나머지가 0이 되면, 그때의 나누는 수가 최대 공약수다.
// GCD(a, b) = GCD(b, a mod b);

// GCD(48, 18)
// 48 / 18 = 몫 2, 나머지 12
// GCD(48, 18) = GCD(18, 12)
// 18 / 12 = 몫 1, 나머지 6
// GCD(18, 12) = GCD(12, 6)
// 12 / 6 = 몫 2 나머지 0
// GCD(12, 6)  = 0
// => 최대 공약수 6

function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}

function gcd(a, b) {
  while (b !== 0) {
    let r = a % b;
    a = b;
    b = r;
  }

  return a;
}

// 5. 버블 정렬
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

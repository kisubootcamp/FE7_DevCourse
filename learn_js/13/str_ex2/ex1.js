// // 1.주어진 문자열이 회문인지 확인하세요. 대소문자를 무시하고 공백을 제거한 후 확인해야 합니다.
// const str = 'A man a plan a canal Panama';
// const strArr = str
//   .toLowerCase()
//   .split('')
//   .filter((n) => n !== ' ');
// const strArr2 = strArr.slice();
// const result = strArr.join('') === strArr2.reverse().join('');
// console.log(result);

// 2 주어진 문자열에서 모음(a, e, i, o, u)의 개수를 세세요.

const str = 'JavaScript is awesome!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const result = { a: 0, e: 0, i: 0, o: 0, u: 0 };

for (let ch of str.toLowerCase()) {
  if (vowels.includes(ch)) {
    result[ch]++;
  }
}
console.log(result);
// { a: 2, e: 2, i: 2, o: 1, u: 0 }

// 연습문제 ++
// 1.
// const strs = ['flower', 'flow', 'flight'];
// console.log(longestCommonPrefix(strs)); // 예상 출력: "fl"

// // 추가 테스트 케이스
// const strs2 = ['dog', 'racecar', 'car'];
// console.log(longestCommonPrefix(strs2)); // 예상 출력: ""

// const strs3 = ['', 'b', 'c'];
// console.log(longestCommonPrefix(strs3)); // 예상 출력: ""

// const strs4 = ['a', 'a', 'a'];
// console.log(longestCommonPrefix(strs4)); // 예상 출력: "a"

// function longestCommonPrefix(strArr) {
//   let min = strArr[0];
//   for (const str of strArr) {
//     if (str.length < min.length) min = str;
//   }
//   if (!min.length) return `""`;

// }

// 2.
// function groupAnagrams(strs) {
//   if (strs.length === 1) {
//     return [[strs[0]]];
//   }

//   const result = {};

//   strs.map((item) => {
//     const temp = item.split('').sort().join('');
//     if (!result[temp]) {
//       result[temp] = [item];
//     } else result[temp].push(item);
//   });

//   return Object.values(result);
// }
// const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// console.log(groupAnagrams(strs)); // 예상 출력: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// const strs2 = [''];
// console.log(groupAnagrams(strs2)); // 예상 출력: [[""]]

// const strs3 = ['a'];
// console.log(groupAnagrams(strs3)); // 예상 출력: [["a"]]

// const strs4 = ['abc', 'cba', 'bac'];
// console.log(groupAnagrams(strs4)); // 예상 출력: [["abc", "cba", "bac"]]

// 3.
// function isValid(str) {
//   let [sCount, mCount, bCount] = [0, 0, 0];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '(') sCount++;
//     if (str[i] === '{') mCount++;
//     if (str[i] === '[') bCount++;

//     if (str[i] === ']') {
//       if (bCount === 0) {
//         return false;
//       } else bCount--;
//     }

//     if (str[i] === '}') {
//       if (mCount === 0) {
//         return false;
//       } else mCount--;
//     }

//     if (str[i] === ')') {
//       if (sCount === 0 ) {
//         return false;
//       } else sCount--;
//     }
//   }
//   return !!!sCount && !!!mCount && !!!bCount ? true : false;
// }
// const str = '()(())';
// console.log(isValid(str)); // 예상 출력: true

// // 추가 테스트 케이스
// const str2 = '([{}])';
// console.log(isValid(str2)); // 예상 출력: true

// const str3 = '(]';
// console.log(isValid(str3)); // 예상 출력: false

// const str4 = '([)]';
// console.log(isValid(str4)); // 예상 출력: false

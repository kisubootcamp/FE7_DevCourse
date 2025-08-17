// 1
function removeChar(str, r) {
  let nstr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== r) {
      nstr += str[i];
    }
  }
  console.log(nstr);
}
removeChar('hello world', 'o'); // "hell wrld"

// 2
function reverseArray(arr) {
  let rvs = [];
  for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    rvs[i] = arr[j];
  }
  console.log(rvs);
}
reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

// 3
function containsNumber(arr, num) {
  let contain = false;
  for (v of arr) {
    if (v === num) {
      contain = true;
    }
  }
  console.log(contain);
}
containsNumber([1, 2, 3, 4, 5], 5); // true
containsNumber([1, 2, 3, 4, 5], 7); // false

// 4
// function isAnagrams(str1, str2) {
//   let th = null;
//   let check = false;
//   if (str1.length !== str2.length) console.log(tf);
//   else {
//     for (let i = 0; i < str1.length; i++) {
//       check = false;
//       for (let j = 0; j < str2.length; j++) {
//         if (str1[i] === str2[j]) {
//           check = true;
//         }
//       }
//       tf = check;
//     }
//     console.log(check);
//   }
// }

function isAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const count1 = [];
  const count2 = [];
  for (let i = 0; i < 26; i++) {
    count1[i] = 0;
    count2[i] = 0;
  }
  for (let i = 0; i < str1.length; i++) {
    let ch = str1[i];
    for (let j = 0; j < 26; j++) {
      if (ch === alphabet[j]) {
        count1[j]++;
        break;
      }
    }
  }
  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];
    for (let j = 0; j < 26; j++) {
      if (ch === alphabet[j]) {
        count2[j]++;
        break;
      }
    }
  }
  for (let i = 0; i < 26; i++) {
    if (count1[i] !== count2[i]) {
      return false;
    }
  }
  return true;
}

isAnagrams('listen', 'silent'); // true
isAnagrams('fluster', 'restful'); // true
isAnagrams('rat', 'car'); // false
isAnagrams('aaa', 'aaaa'); // false

// 5
function twiceSum(arr, key) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (key === arr[i] + arr[j]) array.push([arr[i], arr[j]]);
    }
  }
  console.log(array);
}
twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]

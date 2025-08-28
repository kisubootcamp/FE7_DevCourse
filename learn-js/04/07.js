// 연습문제 +

// 1.
//주어진 문자열에서 특정 문자를 제거하는 함수를 작성
//removeChar("hello world", "o"); // "hell wrld"

// for of? continue??

function removeChar(spring1, spring2) {
  let remove = "";
  for (const valueRemove of spring1) {
    if (valueRemove === spring2) continue;
    remove += valueRemove;
  }
  return remove;
}

console.log(removeChar("hello world", "o")); // "hell wrld"

// 2.
//주어진 배열의 요소를 반전 시키는 함수
//reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
function reverseArray(array) {
  let reverse = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}

console.log(reverseArray([1, 2, 3, 4, 5])); //54321 X :: 6변과 차이
// 배열처럼 출력하려면??:: .push()

// 3.
//주어진 배열에서 특정 숫자가 있는지 확인하는 함수
//containsNumber([1, 2, 3, 4, 5], 5); // true
//containsNumber([1, 2, 3, 4, 5], 7); // false
function containsNumber(array, num) {
  let contains;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] !== num) continue;
    else if (array[i] === num) contains = true;
  }
  //7처럼 아예 없는 경우에는??
  if (contains === undefined) contains = false;
  // 더 간추릴 수 없을까 = ? : 를 사용해볼까
  return contains;
}
console.log(containsNumber([1, 2, 3, 4, 5], 5));
console.log(containsNumber([1, 2, 3, 4, 5], 7));

// 4. ***
//두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃 소문자만 온다고 가정)
//isAnagrams("listen", "silent"); // true
//isAnagrams("fluster", "restful"); // true
//isAnagrams("rat", "car"); // false
//isAnagrams("aaa", "aaaa"); // false

// 문자열 검사 + 뒤집
// 6번처럼 문자열1을 뒤집은 다음에 문자열2에서 동일한 부분이 있는지 확인
function isAnagrams(spring1, spring2) {
  let springA = "";
  for (let i = spring1.length - 1; i >= 0; i--) {
    springA += spring1[i];
  }
  // 동일한 글자 하나가 아니라, 연속된 부분(몇 개까지..?) ...
}

console.log(isAnagrams("listen", "silent"));
console.log(isAnagrams("fluster", "restful"));
console.log(isAnagrams("rat", "car"));
console.log(isAnagrams("aaa", "aaaa"));

// 5. ***
//주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수
//twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2, 3]]
//twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
//twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2, 4]]

function twiceSum(array, num) {
  let sum = [];
  for (let i = 0; i <= array.length; i++) {
    // const 가 안되는 이유 :: for문은 i++로 계속 재할당 되기 때문에 원래 let을 계속 사용해왔단다...
    for (let j = i + 1; j < array.length; j++) {
      // 범위에 =를 포함하면 안 됨 :: 1부터 시작했으니까 4개만 계산하면 되는데, length는 5개니까, undefined가 추가 됨
      // j=1 -> i+1로 수정 :: 1로 하면 i>=1 부터는 5개를 반복하기 때문에 다시 index = 0 인 애들부터 또 돌아서 역수로도 출력됨
      if (array[i] + array[j] === num) sum.push([array[i], array[j]]);
    }
  }
  return sum;
}
// 다중 반복문을 안 쓰는 방법은?

console.log(twiceSum([1, 2, 3, 4, 5], 5));
console.log(twiceSum([1, 2, 3, 4, 5], 9));
console.log(twiceSum([1, 2, 3, 4, 5], 6));

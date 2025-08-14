// 1. 특정 문자 제거
//주어진 문자열에서 특정 문자를 제거하는 함수를 작성하시오.

function removeChar(str, ch) {
    let str2 = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ch) {
            str2 += str[i];
        }
    }
    console.log(str2);
}
// 입력 / 출력
removeChar("hello world", "o"); // "hell wrld"

// 2. 배열 요소를 반전
// 주어진 배열의 요소를 반전 시키는 함수를 작성하시오.
function reverseArray(arr) {
    let arr2 = [];
    for (let i = arr.length-1; i >= 0; i--) {
        arr2.push(arr[i]);
    }
    console.log(arr2);
}

// 입력 / 출력
reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

// 3. 특정 숫자 찾기
// 주어진 배열에서 특정 숫자가 있는지 확인하는 함수를 작성하시오.
function containsNumber(arr, num) {
    let contain = false;
    for (const item of arr) {
        if (item === num) {
            console.log(true);
            contain = true;
        }
    }
    if (!contain) {
        console.log(false);
    }
}
// 입력/출력
containsNumber([1, 2, 3, 4, 5], 5); // true
containsNumber([1, 2, 3, 4, 5], 7); // false

// 4. 애너그램인지 확인
// 두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃)
function isAnagrams(arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        let flag = false;
        for (let j = 0; j < arr2.length; j++) {
            if (i != j && arr1[i] === arr2[j]) {
                flag = true;
                continue;
            }
        }
        if(!flag) return false;
    }
    return true;
}

// 입력/출력 
isAnagrams("listen", "silent"); // true
isAnagrams("fluster", "restful"); // true
isAnagrams("rat", "car"); // false
isAnagrams("aaa", "aaaa"); // false

console.log(isAnagrams("listen", "silent")); // true
console.log(isAnagrams("fluster", "restful")); // true
console.log(isAnagrams("rat", "car")); // false
console.log(isAnagrams("aaa", "aaaa")); // false

// 5. 배열에서 두 수의 합
// 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.
function twiceSum(arr, num) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === num) {
                arr2.push([arr[i], arr[j]]);
            }
        }
    }
    console.log(arr2);
    return arr2;
}

// 입력/출력
twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]
// 문제 6: 연속된 부분 배열의 최대 합

function maxSubArraySum(arr) {
    const state = arr.slice(1).reduce((s, v) => {
        s.cur = s.cur + v > v ? s.cur + v : v;
        s.max = s.cur > s.max ? s.cur : s.max;
        return s;
    }, { cur: arr[0], max: arr[0]});
    return state.max;
}
  
const input1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArraySum(input1)); // 6 ([4, -1, 2, 1])

const input2 = [-1, -2, -3, -4];
console.log(maxSubArraySum(input2)); // -1 ([-1])

const input3 = [1, 2, 3, 4, 5];
console.log(maxSubArraySum(input3)); // 15 ([1, 2, 3, 4, 5])

const input4 = [1, -1, 1, -1, 1, -1, 1];
console.log(maxSubArraySum(input4)); // 1 ([1])

const input5 = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(maxSubArraySum(input5)); // 7 ([4, -1, -2, 1, 5])
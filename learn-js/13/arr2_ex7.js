// 이진 검색
// 정렬된 데이터에서 원하는 값을 찾기 위해
// 검색 범위를 반씩 줄여가면서 탐색하는 방법
// 0 1 2 3 4 5

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        const gap = right - left;
        const half = (gap - (gap % 2)) / 2;
        const mid = left + half;
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(sortedArr, 7));  // 3
console.log(binarySearch(sortedArr, 10)); // -1
console.log(binarySearch(sortedArr, 1));  // 0
console.log(binarySearch(sortedArr, 15)); // 7
console.log(binarySearch(sortedArr, 0));  // -1
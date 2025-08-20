// Team 01 | 수상한 개발자
// // 1.2차원 좌표 상에서 살아가는 코쓱이는 집에서 공원까지 걸어가려고 합니다.
// // 오른쪽 방향으로 한 칸 혹은 위쪽 방향으로 한 칸 움직일 수 있습니다.
// // 집과 공원의 좌표가 각각 주어진다고 가정했을 때 코쓱이가 오른쪽 혹은 위쪽으로 한 칸씩 움직여 **공원에 도착하는 방법의 경우의 수**를 구하세요.
// function paths(homeArr, parkArr) {
//   if (homeArr[0] > parkArr[0] || homeArr[1] > parkArr[1]) return 0;
//   if (homeArr[0] === parkArr[0] && homeArr[1] === parkArr[1]) return 1;
//   return (
//     paths([homeArr[0] + 1, homeArr[1]], parkArr) +
//     paths([homeArr[0], homeArr[1] + 1], parkArr)
//   );
// }

// function countPaths(homeArr, parkArr) {
//   if (homeArr[0] === parkArr[0] && homeArr[1] === parkArr[1]) return 1;
//   let result = 0;
//   result =
//     paths([homeArr[0] + 1, homeArr[1]], parkArr) +
//     paths([homeArr[0], homeArr[1] + 1], parkArr);
//   return result;
// }

// console.log(countPaths([0, 0], [2, 1]));
// console.log(countPaths([1, 2], [4, 5]));
// console.log(countPaths([3, 3], [3, 3]));

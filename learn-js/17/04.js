// 모듈
// 파일 단위로 기능을 나누고 가져다 쓰기 위한 코드 묶음

// 첫 번쨰와 두 번째 방법은 중괄호로 내보낸 걸 불러와야 됨 import {sum,multiple}과 같이
// 대신 이름을 똑같이 해서 받던가 아니면 {multiple as s} 와 같이 as를 써야 함
// 첫 번째 방법
// export function sum(a, b) {
//   return a + b;
// }

// export function multiple(a, b) {
//   return a * b;
// }

// 두 번째 방법
function sum(a, b) {
  return a + b;
}

function multiple(a, b) {
  return a * b;
}

export { sum, multiple };

// 세 번째 방법
// 하나를 내보내는 방법
// 개별 내보내기는 불러올 때 중괄호 없이 하나를 불러옴
// 얘는 불러올 때 이름 마음대로 불러와도 됨
// export default sum;

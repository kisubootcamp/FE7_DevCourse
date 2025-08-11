// 함수 외부에서 결과값을 갖고오고 싶을때 return을 사용
// 함수 스코프 외부로 유효한 값을 전달하기 위함
function sum(num1, num2) {
	return num1 + num2; 
  // 그냥 return; 만 작성한다면? return undefined랑 같음
}

const a = 10;
const b = 10;

const result = sum(a, b);

console.log(`a와 b의 합은? 답:${result}`);
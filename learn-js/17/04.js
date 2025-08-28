// 모듈
// 파일 단위로 기능을 나누고 가져다 쓰기 위한 코드 묶음

// export function sum(a, b) {
// 	return a + b;
// }
// export function multiple(a, b) {
// 	return a * b;
// }

function sum(a, b) {
	return a + b;
}
function multiple(a, b) {
	return a * b;
}

export { multiple };
export default sum; // 중괄호 없이 불러올 수 있음

// JS 장점, 러닝커브(학습장벽) 낮추는 결정적인 역할
// 언어 자체가 느슨함
// JS 단점, 그만큼 코드에 허점이 많아짐
// 엄격하게 부여!
("use strict"); // 엄격모드

// 배열 내장 객체
// mdn 살피기

new Array(10, 'a');
// Array = [10, 'a'] 와 같다

console.log(typeof []); //Object
// null, 객체, 배열 -> Object, 배열인지 정확학 구분이 안 됨
console.log(Array.isArray("[]"));

// 정적 속성은 잘 안 씀
// 인스턴스 메서드는 제일 자주 쓸거니까 한 번 탐색 해보자 (강의노트 부분)
// ㄴ 좀 많음, 왜냐면 다 유용함 ( 강의노트 이외에도 유용함, 한정되지 말 것 )


// 1. 파괴적 메서드 vs 비파괴적 메서드
// ㄴ 배열에만 국한되는 내용은 아님

// 1.1 파괴적 메서드 
// 메서드의 실행 결과가 원본 데이터를 변경시킬 때
// ex. push(), pop(), shift()
// 사용 시, 원본 데이터 손상을 염두해둘 것
// ㄴ 반복문 같은거 돌릴 때, 원본 데이터 변경으로 길이가 변경되거나 하면 반복문 안 돌거나 이럴 수 있어서 곤란함 

// 1.2 비파괴적 메서드
// 메서드의 실행 결과가 원본 데이터를 변경시키지 않을 때


// reduce()
// ㄴ 어려울 수 있음
// 누적된 계산 수행 (배열의 총합을 구할 때) 등 사용함
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

// 문자열 뒤집기 문제
// 전에 for문ㅇ로 풀었었음
const str = "hello";
console.log(str.split("").reverse().join(''));

//.sort()
// 주의점 : 정렬이 잘 안 될 수 있음 ?
// comparefunction :: 정렬에 기준(참고)이 되는 함수를 넣을 수 있음 ()안에다가 -> 정밀 비교
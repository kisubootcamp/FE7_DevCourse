/* 

호이스팅
- 선언과 할당을 구분해서 선언을 최상위로 끌어올리는 현ㅅ낭
(전역/함수) 실행 컨텍스트
- 자바스크립트 코드가 실행되는 환경
-- Record Environment
-- -- 생성 : 변수나 함수와 같은 선언을 메모리에 기록하는 일
-- -- 실행 : 생성 단계에서 기록된 데이터를 바탕으로 코드를 실행하는 일
-- Outer Environment
-- -- 자신이 정의가 된 위치의 상위 렉시컬 스코프를 가리킴

스코프
- 변수에 접근할 수 있는 유효한 범위
-- 함수 스코프 : 함수 안에서만 변수에 접근할 수 있는 유효한 범위
-- 전역 스코프 : 함수 안이든 밖이든 변수에 접근할 수 있는 유효한 범위
-- 블록 스코프 : 블록 범위 안에서 접근할 수 있는 유효한 범위 {}

스코프 체인
변수가 다른 스코프에서 다시 덮이는걸 변수쉐도잉
const num = 10;
function ... {
  const num = 20;
}

*/

let level = 1;
function levelUp() {
	level++;
}
levelUp();
levelUp();

level = 99; // 여기서 다시 할당을 해버리면? 변수가 보호되지 않는다. 은닉되지 않는다.

levelUp();
levelUp();

console.log(level);

// 보호하려면 어떻게 해야할까? 함수 안에 넣어버린다
function levelUp() {
	let level = 1;
	level += 1;
	return level;
}

let level = levelUp();
level = levelUp();
level = levelUp();
level = levelUp();
level = levelUp();
// 이렇게 아무리 다시 할당해도 2가 나온다. 왜 그럴까
console.log(level);

// 전역
// level
// levelUp = function
// 함수(levelUp)
// level = 1;
// level += 1;
// 전역으로 돌아오면 levelUp return 값인 2가 할당됨

// 다시 호출해도 levelUp엔 level이 할당되어있음.

// 증가하게 할라면??
function levelUp() {
	let level = 1;
	function inner() {
		level++;
		return level;
	}
	return inner; // 왜 함수형이 아닌지????
	// 함수를 호출하면 클로저패턴이 아님?
	/* 
  
  const inner = function inner() {
  }
  return inner
  */
}

const warriorUp = levelUp();
let warrior = warriorUp(); // 2
warrior = warriorUp();
warrior = warriorUp();
warrior = warriorUp();

console.log(warriorUp);

// 전역실행컨텍스트
// record : warriorUp, levelUp = function
// levelUp 함수실행컨텍스트
// record : level, inner = function
// inner를 상위 스코프인 전역실행컨텍스트에 전달...? 참조하여 갖고있게되기?
// levelUp은 가비지컬렉션이 수행되지 못함
// 변수의 참조가 끝날 때까지? 메모리에 남아있음... 콜스택에서는 빠졌찌만...
// 이 현상을 클로저 라고 부름...

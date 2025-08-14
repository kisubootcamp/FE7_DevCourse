// 클로저 , 클로저 함수
// 함수가 선언 될 때의 렉시컬 스코프(=환경) 를 기억하고, 그 스코프에 있는 변수에 접근할 수 있는 함수

// 1. 데이터 은닉 - 외부에서 데이터에 직접 접근할 수 없다
// 2. 상태 유지 - 함수 호출 간 변수를 계속 기억
{
  // 클로저 예제
  // 외부 함수의 변수를 내부 함수가 기억하고 있다
  // 외부 함수의 변수를 내부 함수가 접근할 수 있다
  function outer() {
    let count = 0;
    return () => ++count;
  }

  const counter = outer();
  console.log(counter()); //
}
console.log(counter()); //
console.log(counter()); //

function createCounter() {
  let n = 0; // 바깥(상위 스코프)에 숨겨진 상태
  return function () {
    // 이 함수가 n을 '기억'(클로저)
    n++;
    return n;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// makeCounter를 호출하면, 바깥 변수(count)를 "기억"하는 함수를 묶어서 돌려줘요.
function makeCounter() {
  // 바깥(상위 스코프)에 있는 은닉 상태. 외부에서 직접 접근 불가.
  let count = 0;

  // 아래 3개 메서드(내부 함수)들이 모두 count를 "참조"하므로 클로저가 생겨요.
  return {
    inc() {
      // count를 1 증가시키고
      count = count + 1;
      return count; // 증가된 값을 반환
    },
    dec() {
      // count를 1 감소시키고
      count = count - 1;
      return count; // 감소된 값을 반환
    },
    get() {
      // 현재 count를 그대로 반환 (읽기)
      return count;
    },
  };
}

// 사용 예
const c = makeCounter(); // 여기서 count = 0 이라는 은닉 상태가 생성됨(클로저 시작)
console.log(c.get()); // 0
console.log(c.inc()); // 1
console.log(c.inc()); // 2
console.log(c.get()); // 2
console.log(c.dec()); // 1
console.log(c.get()); // 1

// 포인트: 외부에서 c.count 같은 직접 접근은 불가. 오직 메서드로만 바꿀 수 있음(은닉화!)

//콜스택 + 실행컨텍스트
//전역 실행컨텍스트 (필수): 자바 스크립트 코드가 함수가 아닌 곳에서 실행되는 환경. 오직 하나만 존재.
//함수 실행컨텍스트: 자바스크립트 코드가 함수 내부에서 실행되는 환경
//모든 자바스크립트 코드는 함수 바깥, 즉 전역 실행컨텐스트에서부터 실행되기 때문에 전역 실행 컨텍스트가 먼저 생성되며, 필수다.

//콜스택에서 실행컨텍스트라는 공간을 만들고 그 안에 코드를 집어넣은 후, 그 코드를 실행한다.
//전역 실행컨텍스트: 제일 먼저 실행되는 컨텍스트
var num = 10;
console.log(num);

//실행 버튼 -> 콜스택에서 전역 실행컨텍스트 생성 -> 코드 넣고 실행 -> 모든 실행이 끝나면 콜스택 비워짐 -> 모든 코드 실행 완료(종료)
//코드의 종료 = 콜스택이 비워져있는가?

// ES5 전역 실행 컨텍스트의 주요 구성: variable Enviroment, lexical Enviroment, outer Enviroment
// 이후 variable Enviroment, lexical Enviroment가 통합되어 Record Enviroment로 명칭.

// ES6 전역 실행 컨텍스트의 주요 구성:
// Record Enviroment(variable Enviroment(변수 개발환경: 변수 선언)) Outer Enviroment
// 위 구성요소를 통틀어 Lexical Enviroment라고 한다.

// Record Enviroment: 자바스크립트가 실행에 필요한 모든 데이터들을 기록. 변수 선언.
// Record Enviroment는 생성 단계와 실행 단계로 구분한다.
//생성 단계: 실행될 코드를 훑어보고 메모리 확보와 동시에 필요한 변수와 함수 선언을 기록.
//실행 단계: 생성단계에서 기록된 정보를 바탕으로 코드를 실행(함수 호출).

//실행 단계에서 함수를 호출하면, 실행 컨텍스트가 하나 더 생성되는데 이때 생성되는 컨텍스트는 함수 실행 컨텍스트라고 한다.
//함수 실행 컨텍스트 또한 콜스택(FILO)에 담긴다. 마찬가지로 생성/실행 단계로 나뉘어 실행
//함수 실행 컨텍스트 내 코드를 전부 실행했다면 콜스택에서 제거.

//이후 전역 실행컨텍스트에서도 코드를 전부 실행했다면 콜스택에서 제거. 콜스택이 전부 비워지면 전체 코드 실행 종료.

//자바 스크립트의 콜스택은 무조건 1개다.
//콜스택은 FILO 순차적으로 스택을 제거해나가며 코드를 실행.
//전역 실행 컨텍스트 생성, Record Enviroment 시 메모리 확보와 동시에 모든 변수와 함수 선언 기록. 이후 실행.

//Record Enviroment
// 생성 -> a = function
// 실행 -> a();

//함수 실행 컨텍스트(a) 생성, 콜스택에 쌓인다.
//Record Enviroment
// 생성 -> b = function
// 실행 -> b();
function a() {
  function b() {
    console.log("b");
  }

  console.log("a");
  b(); //함수 실행 컨텍스트(b) 생성, 콜스택 쌓인다.
}

function b() {
  console.log("b");
}

a();
console.log("c");

//따라서, a b c 순차적으로 출력이 되는 것. 10000번 실행해도 항상 순서가 똑같다.

//Record Enviroment
// 생성 -> a; TDZ(일시적 사각지대)
// 실행 -> a();

//const 선언이기 때문에 결정되지 않은 값으로 메모리 할당만 받음. TDZ(일시적 사각지대)

a();
//const a 라면 Cannot access 'a' before initialization 에러
//var a 라면 a is not a function 에러
var a = function a() {
  function b() {
    console.log("b");
  }

  console.log("a");
  b();
};

a();
console.log("c");

//가바지 컬렉터(Garbage collector): 메모리를 회수하는 도구
//가비지 컬렉션(Garbage collection): 메모리를 회수하는 과정
//더이상 사용하지 않는 메모리를 자바스크립트가 자동으로 삭제. outo 시스템이 구현.
//무슨 기준? -> 콜스택과 실행 컨텍스트의 원리에 기준. 콜스택에서 제거가 된 실행 컨텍스트의 메모리 청소.
//만약 메모리 회수가 되지 않으면, 메모리 누수 -> 시스템 부하 -> 시스템 다운. 하지만, 자바스크립트는 outo라 걱정이 없다.

//중복 선언이 안된다고 했던 const가 중복 선언이 됨.
//전역 실행 컨텍스트, 함수 실행 컨텍스트. 각각의 num의 실행 컨텍스트(실행되는 환경)가 다르기 때문이다.
//따라서 중복 선언이 금지되는 것은 같은 컨텍스트 한정.
const num = 10;
function printNum() {
  const num = 20;
  console.log(num); //20
}
printNum();
console.log(num); //10

const num = 10;
//printNum 실행 컨텍스트에서 생성은 없음. 따라서, 같은 컨텍스트 내부에 생성된 num이 없음.
//그러나 10이 출력됨.
//
//outer Enviroment: 자신의 상위 lexical Enviroment에 연결통로 셍성. 일방통행, 위에서 아래로만 가능.
//outer Enviroment로 연결된 상위의 lexical Enviroment에서 Record Enviroment의 num을 찾아서 가지고 옴.
function printNum() {
  const uname = "kisu";
  console.log(num); //? -> 10
}
printNum();
console.log(num); //10
console.log(uname); //uname is not defined

// 1. 전역 실행 컨텍스트에서 num과 printNum이 할당. 단, const num이므로 TDZ(일시적 사각지대) 상태. 실행하며 값이 들어감.
// 2. printNum 함수 실행 시 printNum 실행 컨텍스트가 콜스택에 쌓인다.
// 3. printNum 실행 컨텍스트에서 uname 할당. 실행하며 값이 들어감.
// 4. outer Enviroment로 연결된 상위의 lexical Enviroment에서 Record Enviroment의 num을 찾아서 가지고 옴.
// 5. printNum 실행 컨텍스트애서 더이상 실행할 코드가 없으면 콜스택에서 제거. 자동 가비지 컬렉션.
// 6. 전역 실행 컨텍스트에서 돌아와 uname을 찾으면, 해당 정보가 없음. 상위의 lexical Enviroment도 없기 때문에 참조 불가능.
// 7. 따라서, uname은 정의되지 않았다는 오류 출력

//헷갈림
//스코프: 변수에 접근할 수 있는 유효한 범위. (단지 용어. 자바스크립트의 개념적인 원리는 설명되지 않은 것.)
//함수 스코프 / 전역 스코프로 구분된다.
//함수 스코프: 함수 안에서만 변수에 접근할 수 있는 유효한 범위
//전역 스코프: 어디에서든 함수 안이든 밖이든 변수에 접근할 수 있는 유효한 범위
//스코프 체인: 연결된 (함수 -> 전역처럼) 상위의 스코프를 찾아가는 행위

//함수 실행 컨텍스트에서 변수를 찾을 때, 함수 스코프를 베이스로 하되, 전역 스코프까지 확장 가능.
//왜냐하면? 함수 실행 컨텍스트의 outer Enviroment로 연결된 상위의 lexical Enviroment를 접근할 수 있기 때문이다.

//질문
//inner 실행 컨텍스트의 outer Enviroment로 연결된 상위의 lexical Enviroment를 접근하여 num을 찾으므로
//바로 위에 있는 printNum 실행 컨텍스트의 num을 참조한다.
//만약 printNum에도 num이 없다면 printNum의 실행 컨텍스트의 outer Enviroment로 연결된 상위의  lexical Enviroment를 접근...
//이런 과정을 식별자 결정이라고 하며, 기준은 스코프.
const num = 10;
function printNum() {
  const num = 20;
  function inner() {
    console.log(num); // 20
  }
  inner();
}
printNum();

//이런 환경에서는 b()를 호출할 때 왜 전역 컨텍스트에 있는 10이 출력되나요?
//b가 a 내부에서 선언 되어졌다면 b: 20이 출력되나, 따로 선언되었기 때문에 상위는 전역이다.
const num = 10;
function a() {
  const num = 20;
  b();
  console.log(`a: ${num}`); //a: 20
}
//선언된 위치를 기반으로 상위 스코프의 Lexical Enviroment? outer 객체?가 달라진다.
//b의 상위는 전역 실행 컨텍스트. a가 아니다.
function b() {
  console.log(`b: ${num}`); //b: 10
}
a();

//<용어 정리>
// 변수 쉐도잉(variable shadowing): 자신의 스코프의 변수로 상위의 스코프의 변수가 가려지는 현상
// TDZ(Temporal Dead Zone): 일시적 사각 지대
// 식별자 결정
// 함수/전역 스코프
// 스코프 체인: 연결된 (함수 -> 전역처럼) 상위의 스코프를 찾아가는 행위
// Lexical Enviroment(Record Enviroment, Outer Enviroment)

//매개 변수 또한 Record Enviroment 기록된다.
var num = 10;
function outer(x) {
  function inner(x) {
    console.log(x); //매개변수는 함수 스코프 내에서 호출 가능
    console.log(x + 10);
  }
  inner(x);
}
outer(num);

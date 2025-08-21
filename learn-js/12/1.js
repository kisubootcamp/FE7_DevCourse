// 래퍼 객체 wrapper object
// 자스에서 기본 값을 사용할 때, 일시적으로 해당 타입에 대응하는 객체로 감싸주는 객체

const num = 10.12; // 이게 인스턴스 객체일까? 아니다. 원시타입
console.log(num.toFixed(5)); // 그럼 원시 타입이 어떻게 메서드를 호출했을까?
// new Number(10.12) 내부적으로 해당 객체를 임시로 만들어서 Number의 메서드를 호출
// 메서드 호출이 끝나면 임시 객체는 즉시 제거된다.

const originalArray = [{ id: 1 }, { id: 2 }];
const slicedArray = originalArray.slice(0, 1);

console.log(slicedArray);
console.log(originalArray);
// 출력: [ { id: 1 } ]

slicedArray[0].id = 999;

console.log(originalArray);
// 출력: [ { id: 999 }, { id: 2 } ]

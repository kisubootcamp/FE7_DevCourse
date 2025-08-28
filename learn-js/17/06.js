// 모듈
// 파일 단위로 기능을 나누고 가져다 쓰기 위한 코드 묶음

export function sum(a,b) {
  return a+b;
}

export function muliple(a,b) {
  return a*b;
}

// export와 defalut export ???

// as 키워드로 이름 변경 가능

/////////////////////////////////////////////////////////////

// JS 언어는 언어 자체가 느슨하다
// 장점 : 러닝커브(학습장벽) 낮추는 결정적 역할
// 단점 : 코드에 허점 증가

"use strict"; // 엄격 모드
// 를 명시, 문법을 엄격히 따지겠다는 의미
num = 10; // 오류가 안 남, 변수 선언 안 했는데 -> 엄격 모드, 이제 에러남

// typeScript는 엄격모드가 기본 (추가 안해도 되는)
// 모듈로 불러올 때도 엄격모드가 기본이라 use strict 없어도 에러남

console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof NaN); //number

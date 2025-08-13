/*
<<<<<<< HEAD
자바스크립트의 역사

- 1993년: 모자이크 웹 브라우저가 출시
  (Marc Andreesen과 Eric Bina가 개발한 최초의 그래픽 웹 브라우저)
- 1994년: Netscape, Netscape Navigator 출시
  당시 웹 브라우저는 돈을 지불하고 사용하는 유로 프로그램이었음
- 1994년.9월: 경쟁력을 높이기 위해 스크립트 언어 개발 시작
  (Brendan Eich가 개발한 최초의 스크립트 언어 - 10일만에 Mocha라는 이름으로 개발 완료)
  (-> LiveScript (인터프리터) 탑재)
- 1995년: 잘 알려지지 않자, 네임을 조금이라도 더 알리기 위해
  Java(Sun Microsystems)와 유사한 이름으로 JavaScript로 변경
- 1995년: 마이크로 소프트사의 Internet Explorer가 출시
  => Netscape Navigator을 Reverse Engineering하여 JScript 개발 및 출시 (양아치 행동)
---
- 넷스케이프 vs 인터넷 익스플로러의 경쟁
- 1996년: Netscape와 Sun Microsystems가 JavaScript의 표준화를 위해
  ECMA International(웹 표준 단체)에 제안 (ECMA-262)
  -> 웹 브라우저에서 동작하는 언어에 대한 표준을 정립하자.
- 1997년: ECMAScript 1 표준 발표
- 1998년: ECMAScript 2 표준 발표
- 1999년: ECMAScript 3 표준 발표
  (정규 표현식, try/catch, switch 등 추가)
- 2000년: ECMAScript 4, 인터넷 익스플로러가 표준을 따라가지 않기로 선언
  -> 점유율 넷스케이프 10% 이내 (유료)
  -> 인터넷 익스플로러 90% 점유율 (무료, 윈도우 장사 + 인터넥 익스플로러 끼워팔기), 수익 모델이 있었음
  -> 컴퓨터, 윈도우(윈도우95, 윈도우98, me 등)와 함께 제공
---
- 암흑기: 인터넷 익스플로러 폭군이 시장을 지배하던 시절

- 2004년 - Firefox 출시
- 다양한 웹 브라우저가 출시 -> 개발자에 대한 폭발적인 수요 -> 개발자가 많아짐
  -> 개발자 커뮤니티가 커짐 -> 플러그인이 개발 (Jquery, 2006)
- 2008년: 구글 크롬 출시
- 2009년: ECMAScript 5 표준 발표
  (strict mode, JSON, Array.forEach 등 추가)
- 2015년: ECMAScript 6 표준 발표
  (let, const, arrow function, class, module 등 추가)
  (*자바스크립트의 역사에서 가장 큰 변환점*)
- 2016년: ECMAScript 7 표준 발표
- 2017년: ECMAScript 8 표준 발표
  (async/await, Object.values, Object.entries 등 추가)
- 2018년: ECMAScript 9 표준 발표
- 2019년: ECMAScript 10 표준 발표
- 2020년: ECMAScript 11 표준 발표
  (optional chaining, nullish coalescing operator 등 추가)
- 2021년: ECMAScript 12 표준 발표
- 2022년: ECMAScript 13 표준 발표
- 2023년: ECMAScript 14 표준 발표
  (Array.prototype.at, Promise.any 등 추가)
// ECMAScript 15 표준은 아직 발표되지 않았음
// ECMAScript 15 표준은 2024년에 발표될 예정임
=======
1993 - 모자이크 웹 브라우저 (Marc Andreessen, 대학교 다닐 때)
1994 - Netscape, Netscape Navigator 출시  (Marc Andreessen)
1994.9 - 스크립트 언어의 개발 -> Brendan Eich, (10일만에 Mocha) -> Live Script (인터프리터)
1995 - Java(선 마이크로즈 시스템즈) -> JavaScript 
1995 - 마이크로 소프트사의 인터넷 익스플로러 출시 
    -> Netscape Navigotor -> reverse engineering -> JScript (양아치)
-- 
넷스케이프 vs 인터넷익스플로러
-- 
1996.11 -> Ecma International(웹 표준 단체) -> 웹 브라우저에서 동작하는 언어에 대한 표준을 정립하자.
1997.7 -> EcmaScript 1 표준 
1998 -> EcmaScript 2 표준 
1999 -> EcmaScript 3 표준 
2000 -> EcmaScript 4(보류), 인터넷 익스플로러가 표준을 따라가지 않기로 선언합니다.
  -> 점유율 넷스케이프 10% 이내 (유료)
  -> 인터넷 익스플로러 90% 점유율 (무료, 윈도우 장사 + 인터넷플로러를), 수익 모델이 있었음 
  -> 컴퓨터, 윈도우(윈도우 95, 98, me )
---
암흑기 (2000 - 2009)
인터넷 익스플로러 폭군이 시장을 지배하던 시절

2004 - 파이어폭스 출시 (액션스크립트랑, 타마린) 

                  하나의 동작 
                    Jquery
인터넷익스플로러, 사파리, 파이어폭스, 넷스케이프 네비게이터 .... 

개발자에 대한 폭발적인 수요 -> 개발자가 많아짐
-> 개발자 커뮤니티가 커짐
-> 플러그인이 개발 (Jquery, 2006)

2008 -> 구글, 크롬 브라우저의 출시 V8 (5배, 10초, 2초)

2009 -> ECMASCRIPT 5 (ES5)
2015 -> ECMASCRIPT 6 (ES6) // 

2016 -> ECMASCRIPT 7 (ES7)
2017 -> ECMASCRIPT 8 (ES8)
2018 -> ECMASCRIPT 9 (ES9)
2019 -> ECMASCRIPT 10 (ES10)
2020 -> ECMASCRIPT 11 (ES11)  // bigint
2021 -> ECMASCRIPT 12 (ES12)  .replaceAll()
2022 -> ECMASCRIPT 13 (ES13)
2023 -> ECMASCRIPT 14 (ES14)
2024 -> ECMASCRIPT 15 (ES15)
2025 -> ECMASCRIPT 16 (ES16)
----

>>>>>>> FE7_kisu
*/

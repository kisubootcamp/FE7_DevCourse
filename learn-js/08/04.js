// this
// this는 함수를 호출한 객체를 가리킨다

// 화살표 함수의 this와, 일반 함수의 this는 다름

function main() {
  console.log(this); // this-> 함수를 호출한 객체
}

const obj = {
  name: "kim",
  main: main, // 함수 자체를 value에 할당! main()은 함수 호출!
  smallObj: {
    name: "small",
    main: main,
  },
};

obj.main(); // obj가 main 함수를 호출했네? 그럼 obj 객체를 출력
obj.smallObj.main(); // smallObj부터 출력

////////////////////////

// bind => this가 가리키는 객체의 값을 바꾼다.
const mainBind = main.bind({ key: "binding" });
mainBind();

///////////////////////////
// 그렇다면 화살표 함수의 this는?
// 화살표 함수는 [내부적]으로 this가 없다.
//  ㄴ 따라서 자신이 속해있는 실행 컨텍스트의 this를 빌려온다.
const sub = () => console.log(this); // 전역 실행 컨텍스트의 this(window)를 빌려왔음 <- 전역의 this는 윈도우
const subBind = sub.bind({});
subBind();

// 즉 화살표 함수의 this는 자신이 정의되어있는 위치 기준으로 상위 렉시컬 환경의 this값을 가져온다.

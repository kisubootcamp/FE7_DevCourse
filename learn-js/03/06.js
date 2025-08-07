// if -> 표현식으로 조건을 처리할 때 사용함
// switch -> 값으로 조건을 처리할 때 사용함
// switch, case, break, default
// switch 문은 표현식의 값과 일치하는 case의 코드를 실행시킴
// break 키워드를 만나면 해당 case를 종료시킴
// fall through

const fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("사과입니다.");
        break;
    case "banana":
        console.log("바나나입니다");
        break;
    case "orange":
        console.log("오렌지지입니다");
        break;
    default:
        console.log("사과도 바나나도 오렌지도 아닙니다.");
}
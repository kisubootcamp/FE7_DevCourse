// if -> 표현식으로 조선을 처리할 때 사용합니다.
// switch -> 값으로 조건을 처리할 떄 사용합니다.
// switch, case, break, default
const fruit = "apple";
// const fruit = "melon";
switch(fruit){
    case "apple":
        console.log("사과입니다.");
        // break;
    case "banana":
        console.log("바나나입니다.");
        // break;
    case "orange":
        console.log("오렌지입니다.");
        // break;
    default:
        console.log("사과도 바나나도 오렌지도 아닙니다.");
}
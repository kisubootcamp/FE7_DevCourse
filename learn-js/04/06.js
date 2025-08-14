// 스코프(Scope), 변수가 유효한 범위
// 함수 스코프, 블록 스코프
// {}

function sum(num1, num2) {
    const result = num1 + num2;
    console.log(result);
    {
        let x = 10;
    }
}

sum(10, 20);

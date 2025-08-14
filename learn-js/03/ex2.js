// 1. 학점 계산
const score = 85;
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
}  else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}

// 2. 짝수와 홀수 판별
const num = 3;
if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 3. 로그인 확인 및 권한 부여
const isLoggedIn = true;
const isAdmin = false;
if (!isLoggedIn) {
    console.log("Please log in")
} else if (isLoggedIn && !isAdmin) {
        console.log("Welcome, admin!")
} else {
    console.log("Access denied");
}

// 4. 숫자 크기 비교
const a = 10;
const b = -3;
if (a > b) {
    console.log("a is greater");
} else if (a < b) {
    console.log("b is greater");
} else {
    console.log("a and b are equal");
}

// 5. 월별 계절 판별
const month = 3;
switch(month) {
    case 12:
    case 1:
    case 2:
        console.log ("Winter");
    case 3:
    case 4:
    case 5:
        console.log ("Spring");
    case 6:
    case 7:
    case 8:
        console.log ("Summer");
    case 9:
    case 10:
    case 11:
        console.log("Fall");
    default:
        console.log("Invalid month");
}

// 6. 할인율 계산
const amount = 40000;
if (amount >= 100000) {
    console.log(amount * 0.8);
} else if (amount >= 50000) {
    console.log(amount * 0.9);
} else {
    console.log(amount);
}

// 7. 요일 출력
const day = 3;
switch (day) {
    case 1:
        console.log("월");
        break;
    case 2:
        console.log("화");
        break;
    case 3:
        console.log("수");
        break;
    case 4:
        console.log("목");
        break;
    case 5:
        console.log("금");
        break;
    case 6:
        console.log("토");
        break;
    case 7:
        console.log("일");
        break;
    default:
        console.log("잘못된 입력");
}

// 8. 양수, 음수, 0 판별
const num2 = 10;
if (num2 > 0) {
    console.log("양수");
} else if (num < 0) {
    console.log("음수");
} else {
    console.log("0");
}
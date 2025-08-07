//1
//표현식은 switch문 대신 if 를 사용
const score = 90;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else if (score >= 60) console.log("D");
else if (score < 60) console.log("F");

//2
num = 20;
if (num % 2 === 0) console.log("Even");
else console.log("Odd");

//3
const isLoggedIn = true;
const isAdmin = false;
if (isLoggedIn && isAdmin) console.log("Welcome, admin");
if (isLoggedIn && isAdmin !== true) console.log("Access denied");
if (isLoggedIn !== true) console.log("Please log in");

//4
a = 10;
b = 20;
if (a > b) console.log("a is greater");
else if (b > a) console.log("b is greater");
else console.log("a and b are equal");

//5
const month = "8";
switch (month) {
  case "12":
  case "1":
  case "2":
    console.log("Winter");
    break;
  case "3":
  case "4":
  case "5":
    console.log("Spring");
    break;

  case "6":
  case "7":
  case "8":
    console.log("Summer");
    break;
  default:
    console.log("Fall");
    break;
}

//6
buy = 20000000;
let discount;
if (buy >= 100000) console.log(buy * 0.8);
else if (buy >= 50000) console.log(buy * 0.9);

//7
const day = 2;
switch (day) {
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 4:
    console.log("목요일");
    break;
  case 5:
    console.log("금요일");
    break;
  case 6:
    console.log("토요일");
    break;
  case 7:
    console.log("일요일");
    break;
  default:
    console.log("잘못된 입력");
    break;
}

//8
const num2 = 10;
if (num2 > 0) console.log("양수");
else if (num2 === 0) console.log("0");
else console.log("음수");

const score = 100;

if(score > 90) console.log("A");
else if(score > 80) console.log("B");
else if(score > 70) console.log("C");
else if(score > 60) console.log("D");
else console.log("F");

const num = 10;
console.log(num % 2 == 0 ? "Even" : "Odd");

const isLoggedIn = true;
const isAdmin = false;

if(!isLoggedIn) console.log("please log");
else {
    if(isAdmin) console.log("Welcome, admin!")
    else console.log("access denied")
}

const a = 10;
const b = 20;
if(a > b) console.log("a is greater") 
else if(a < b) console.log("b is greater")
else console.log("a and b are equal")

const month = 5;
if(month === 1 || month === 2 || month === 12) console.log("Winter");
else if(month === 3 || month === 4 || month === 5) console.log("Spring");
else if(month === 6 || month === 7 || month === 8) console.log("Summer");
else console.log("Fall");

const price = 100000;

if(price >= 1000000) console.log(price * 0.8);
else if(price >= 500000) console.log(price * 0.9);
else console.log(price);

const day = 7;
switch(day) {
    case 1:
        console.log("월")
        break;
    case 2:
        console.log("화")
        break;
    case 3:
        console.log("수")
        break;
    case 4:
        console.log("목")
        break;
    case 5:
        console.log("금")
        break;
    case 6:
        console.log("토")
        break;
    case 7:
        console.log("일")
        break;
        
}

const num2 = 10;

if(num2 > 0) console.log("양수")
else if(num2 < 0) console.log("음수")
else console.log("0");
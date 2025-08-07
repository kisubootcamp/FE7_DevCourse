//1
const a = true;
const b = false;
console.log(a && b);
console.log(a || b);
console.log(!a);

//2
const x = 5;
const y = 10;
const z = 3;

console.log(x > 10 && y < 5);
console.log(x > 10 || z > 3);
console.log(y !== 0);

//3
isLoggedIn = true;
isAdmin = false;
console.log(isLoggedIn ? "Welcome" : "Please log in");
console.log(isAdmin ? "Admin access granted" : "Admin access denied");
console.log(
  isLoggedIn && isAdmin ? "Full access granted" : "Restricted access"
);

//4
const value1 = undefined;
const value2 = "wow";
console.log(!!value1 || !!value2);
console.log(!value1 && !value2);
//0도 값이 없는 값으로 여김

//5
const num = 1000;
console.log(num >= 0 && 100 >= num); // 100>= num >= 0 이렇게 절대 ㄴㄴ
console.log(0 > num || num > 100);

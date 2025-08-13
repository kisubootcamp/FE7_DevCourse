// & -> 엠퍼센트 기호 (AND)
// | -> 파이프 기호 (OR)
// AND 연산자, &&
// OR 연산자, ||
// NOT 연산자, !

const ex1 = 10 < 20 && 10 < 15; // true
const ex2 = 10 > 20 && 10 < 15; // false
const ex3 = 10 > 20 && 10 < 15 && 10 < 0; // false
const ex4 = 10 > 20 && fksdjhksfnksnfksnfks; // false

const ex5 = 10 < 0 || 10 < 20; // false
const ex6 = 10 > 20 || sdjnfjsnfslfnssfssdfs; // false

const ex7 = (10 < 20 && 10 < 15) || 10 < 0; // true

// 코드의 가독성을 높이는 노력을 해야 한다.

const ex8 = !(10 < 20); // false
const ex9 = !10 < 20;

// 팁
const x = 10;
console.log(!!x); // true

// Git
// git remote add upstream [주소]
// git remote -v
// git branch -r
// git fetch upstream
// git switch -c FE7_kisu upstream/FE7_kisu
// git pull

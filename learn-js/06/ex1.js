console.log(myVar); 
var myVar = 10;
console.log(myVar);


// console.log(num);
// var num;
var num = 5;
console.log(num); // 5

function num() {
  return 10;
}

console.log(num); // 5
console.log(num()); // num is not a function


var x = 10;
function test() {
  console.log(x); // undefined
  var x = 5;
  // let x = 5;
  console.log(x); // 5
}
test();
console.log(x); // 10
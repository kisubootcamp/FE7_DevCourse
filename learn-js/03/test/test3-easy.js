for(let i = 1; i <= 9; i++){
    console.log(i);
}

let sum1 = 0;
for(let i = 1; i <= 9; i++){
    sum1 += i;
}
console.log(sum1);

for(let i = 1; i <= 100; i++){
    if(i % 2 == 0) console.log(i);
}

let sum2 = 0;
let numArr = [10, -10, 20, -30, 40];
for(num of numArr){
    if(num > 0){
        sum2 += num
    }
}
console.log(sum2);

for(let i = 0; i <= 15; i++){
    if(i % 2 == 0) console.log(i, "짝수");
    else console.log(i, "홀수")
}

const numArr2 = [7, 2, 9, 4, 5];
let max = numArr2[0];
for(num of numArr2){
    if(max < num)
        max = num;
}
console.log(max);

const temp = [];
const arr = ['a','b', 'c', 'd', 'e'];
for(i = 0; i < arr.length; i++){
    if( i % 2  == 0){
        temp.push(arr[i]);
    }
}

for(let i = 1; i <= 9; i++){
    console.log(`3 * ${i} = ${i * 3}`);
}
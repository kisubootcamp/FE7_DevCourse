for(초기문; 조건문; 증감문){
    // 1
    // 2
    // 3
// }

// for(let i = 1; i < 10; i++){
//     console.log(i);
// }


// for(let i = 1; i <= 3; i++){
//     console.log(`i = ${i}`);
//     for(let j = 1; j <= 3; j++){
//         console.log(`j = ${j}`);
//     }
// }

let n = 0;
for(let i = 1; i <= 3; i++){
    for(let j = 1; j <= 3; j++){
        for(let k = 1; k <= 3; k++){
            for(let v = 1; v <= 3; v++){
                n++;
            }
        }
    }
}
console.log(n);
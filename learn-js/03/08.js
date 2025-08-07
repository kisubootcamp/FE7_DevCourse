// 무한 루프
/*
while (true) {
}
*/

let i = 1;
while(i <= 9) {
    console.log(i);
    i++;
}

i = 1;
do {
    console.log(i++);
} while (i <= 9);

i = 1;
while (i <= 9) {
    i++;
    if (i === 4) break;
    if (i % 2 === 1) continue;
    console.log(i);
}
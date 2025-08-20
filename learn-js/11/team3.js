function wrap(stuffs) {
    // const items = [2, 4, 5, 3, 2, 7, 1];
    const items = stuffs;
    let box = 1;
    let weight = 0;
    for (const item of items) {
        if (weight + item > 10) {
            box ++;
            weight = 0;
        } else {
            weight += item;
        }
    }
    console.log(`총 ${box}박스가 필요합니다.`);
}

wrap([2, 4, 5, 3, 2, 7, 1]);

function fishingResult(fishes) {
    const fishingList = {};
    for (const fish of fishes) {
        fishingList[fish] = (fishingList[fish] || 0) + 1;
    }
    console.log(fishingList);
}


fishingResult(['광어', '고등어', '광어', '광어', '우럭', '광어', '광어']);
fishingResult(['참치', '고등어', '광어', '광어', '우럭', '광어', '우럭', 
'연어', '고등어', '참치', '연어', '연어', '광어', '우럭', '참치', '고등어', '우럭']);
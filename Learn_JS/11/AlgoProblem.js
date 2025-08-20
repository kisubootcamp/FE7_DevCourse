// 3팀 문제 1번 📦 박스에 물건 포장하기 📦
function solution1(items){
    let totalWeight = 0;
    let countBox = 1;
    for(const item of items){
        if(totalWeight + item <= 10){
            totalWeight += item;
        }else{
            countBox++;
            totalWeight = item;
        }
    }
    console.log(`총 ${countBox}박스가 필요합니다.`);
}

// input
items = [2, 4, 5, 3, 2, 7, 1];

// output
solution1(items); // 총 3박스가 필요합니다.


// 3팀 문제 2번 🐟 낚시 결과 압축
function solution2(arr) {
  const result = {};

  for (const a of arr) {
    if (result[a] === undefined) {
      result[a] = 1;
    } else {
      result[a]++;
    }
  }

  console.log(result);
}

// input 
['광어', '고등어', '광어', '광어', '우럭', '광어', '광어']
['참치', '고등어', '광어', '광어', '우럭', '광어', '우럭', 
'연어', '고등어', '참치', '연어', '연어', '광어', '우럭', '참치', '고등어', '우럭']

// output
solution2(['광어', '고등어', '광어', '광어', '우럭', '광어', '광어']);// { '광어': 5, '고등어': 1, '우럭': 1 }
solution2(['참치', '고등어', '광어', '광어', '우럭', '광어', '우럭', 
'연어', '고등어', '참치', '연어', '연어', '광어', '우럭', '참치', '고등어', '우럭']);// { '참치': 3, '고등어': 3, '광어': 4, '우럭': 4, '연어': 3 }
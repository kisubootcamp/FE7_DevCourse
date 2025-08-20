function tollgate(obj) {
    let sum = 0;
    for(const value of Object.values(obj)) {
        switch(value) {
            case "tollgateA" :
                sum += 2000;
                break;
            case "tollgateB" :
                sum += 2300;
                break;
            case "tollgateC" :
                sum += 3000;
                break;
            case "tollgateD" :
                sum += 700;
                break;
            case "tollgateE" :
                sum += 4000;
                break;
        }
    }
    console.log(sum);
}


tollgate({ 상윤: "tollgateA", 준영: "tollgateB", 주원: "tollgateC" });
tollgate({ 레나: "tollgateA", 선혜: "tollgateC", 기수: "tollgateC", 프그: "tollgateE",});
tollgate({ 네이버: "tollgateA", 카카오: "tollgateA", 라인: "tollgateA" });


function stairGame(n) {
    
}
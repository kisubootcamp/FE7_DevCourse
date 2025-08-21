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

// 7팀 1번 회원 관리 시스템
class MemberManager {
    constructor() {
        this.members = [];
    }
    addMember(id, name, age) {
        const exists = this.members.some(member => member.id === id);
        if (exists) {
            console.log("이미 존재하는 id입니다.");
            return;
        }
        this.members.push({ id, name, age });
    }
    deleteMember(id) {
        const exists = this.members.some(member => member.id === id);
        if (!exists) {
            console.log("존재하지 않는 id입니다.");
            return;
        }
        this.members = this.members.filter(member => member.id !== id);
    }
    get getMembers() {
        return this.members;
    }
}
// 입출력
const m = new MemberManager();

m.addMember(1, "jane", 25);
console.log(m.getMembers); // [ { id: 1, name: 'jane', age: 25 } ]
m.deleteMember(1);
m.deleteMember(1); // 존재하지 않는 id입니다.

// 7팀 문제 2번 “고속버스 요금 계산기”
class Ticket{
    constructor(age, seatClass, hour) {
        this.age = age;
        this.seatClass = seatClass;
        this.hour = hour;
    }

    calcFare() {
        const fares = {
            "일반": { adult: 26700, child: 13400 },
            "우등": { adult: 39700, child: 19900 },
            "프리미엄": { adult: 43900, child: 25800 }
        };

        if (!fares[this.seatClass]) {
            console.log("등급은 '일반', '우등', '프리미엄' 중 하나여야 합니다.");
            return;
        }

        if (this.hour < 0 || this.hour > 23) {
            console.log("시간은 0시부터 23시 이내로 숫자로 작성해주세요");
            return;
        }
        const isAdult = this.age >= 14;
        let fare = isAdult ? fares[this.seatClass].adult : fares[this.seatClass].child;
        if (this.hour >= 22 || this.hour < 4) {
            fare = Math.round(fare * 1.2);
        }

        return fare;
    }
}

// ### 입력 예시

const t1 = new Ticket(28, "우등", 23);
const t2 = new Ticket(12, "일반", 21);
const t3 = new Ticket(14, "프리미엄", 2);


// ### 출력 예시

console.log(t1.calcFare()); // 47640
console.log(t2.calcFare()); // 13400
console.log(t3.calcFare()); // 52680

// 1팀 1번 “길 찾기”
function solution3(start, end) {
	const [x1, y1] = start;
	const [x2, y2] = end;
	
	function dfs(x, y) {

	    if (x === x2 && y === y2) return 1;
	
	    if (x > x2 || y > y2) return 0;
	
	    return dfs(x + 1, y) + dfs(x, y + 1);
	}
	return dfs(x1, y1);
}

// 입출력
console.log(solution3([0, 0], [2, 1]));
console.log(solution3([1, 2], [4, 5]));
console.log(solution3([3, 3], [3, 3]));

// 1팀 2번 "소수이면서 홀수"
function solution4(num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        if (i < 2) continue; 
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime && i % 2 !== 0) {
            result.push(i);
        }
    }
    return result;
}
console.log(solution4(100));
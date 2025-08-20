function checkPasswordStrength(str) {
    let hasUppercase = false;
    let hasLowercase = false; // 소문자 포함 여부
    let hasNumber = false;    // 숫자 포함 여부
    const len = str.length;
    for (let i = 0; i < len; i++) {
        const ch = str[i];
        if ("A" <= ch && ch <= "Z") {
            hasUppercase = true;
        } else if ("a" <= ch && ch <= "z") {
            hasLowercase = true;
        } else if ("0" <= ch && ch <= "9") {
            hasNumber = true;
        }
        if (hasUppercase && hasLowercase && hasNumber)
            break;
    }
    return len >= 8 && hasUppercase && hasLowercase && hasNumber;
}

// 기본 테스트
console.log(checkPasswordStrength("1q2w3e4r"));      // false, 대문자가 없음
console.log(checkPasswordStrength("PassWord1234"));  // true, 모든 조건 만족
console.log(checkPasswordStrength("Password"));      // false, 숫자가 없음
console.log(checkPasswordStrength("PASSWORD123"));   // false, 소문자가 없음
console.log(checkPasswordStrength("pass1234"));      // false, 대문자가 없음

// 엣지 케이스
console.log(checkPasswordStrength("A1b2C3d4"));      // true, 최소 길이 8, 조건 만족
console.log(checkPasswordStrength("Ab1"));           // false, 길이 부족
console.log(checkPasswordStrength(""));              // false, 빈 문자열
console.log(checkPasswordStrength("12345678"));      // false, 알파벳 없음
console.log(checkPasswordStrength("abcdefgh"));      // false, 대문자와 숫자 없음


function findParkingSpot(parkingLot, desired) {
    if (parkingLot[desired-1] === 0) return `${desired}번 자리에 주차 성공!`;
    let found = false;
    
    
}
// 비밀번호 보안성 체크

// 비밀번호는 8자리 이상이여야 한다.
// 비밀번호는 대문자나 소문자로만 이루어지면 안된다.
// 비밀번호는 최소 1개 이상의 숫자를 포함해야 한다.

// 입력된 비밀번호에 대한 위의 요소들을 검사해서 true / false로 반환하는 함수를 만들어라.

// let, const 변수 선언
// for 반복문
// if 조건문
// 함수 선언

function checkPasswordStrength(password) {
  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;

  for (let i = 0; i < password.length; i++) {
    const ch = password[i];
    if("A" <= ch && ch <= "Z"){
        hasUppercase = true;
    } else if("a" <= ch && ch <= "z"){
        hasLowercase = true;
    } else if("0" <= ch && ch <= "9"){
        hasNumber = true;
    }

    if(hasUppercase && hasLowercase && hasNumber){
        break;
    }
  }

  if (password.length >= 8 && hasNumber && hasUppercase && hasLowercase) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkPasswordStrength("1q2w3e4r");
checkPasswordStrength("PassWord1234");

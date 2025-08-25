// 자바스크립트 ES6
// 계산된 속성(Computed Property Names)
// 객체의 속성 이름을 고정된 문자열이 아니라, 표현식의 결과값으로 동적으로 지정하는 기능을 말함.
// 객체 리터럴 안에서 대괄호 표기법으로 표현식 결과를 키로 사용하는 기능을 말함.
// 주로, 동적인 키 생성이나 변수/상수 값을 객체 키로 바로 넣고 싶을 때 활용함.
const key = "age";
const id = Symbol("id"); // 객체의 키 값으로 심볼도 사용 가능
const user = {
    [id]: 1,
    name: "kim",
    [key + "a"]: 20, // agea: 20
}


console.log(user); // { name: 'kim', agea: 20 }

console.log(user[id]);
console.log(user["name"]);
console.log(user[key + "a"]);

function makeUser(propName, value) {
    return {
        [propName]: value
    };
}
const users = makeUser("name", "kim");
console.log(users); // { name: 'kim' }


const id2 = Symbol("id");
console.log(id2);
console.log(id === id2); // false
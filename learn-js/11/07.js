const person = {
    name: "kim",
}
// value
// writable -> false 수정 불가능 true 가능
// enumerable -> false 열거 가능 속성에 안 보임, true 보이
// configurable -> 속성의 삭제 불가
Object.defineProperty(person, "age", {
    value: 20,
    enumberable: true,
    writable: true,
    configurable: true,
});

Object.defineProperties(person, {
    job: {
        value: "developer",
        enumerable: true,
    },
    salary: {
        value: 5000,
        enumberable: true,
    }
});


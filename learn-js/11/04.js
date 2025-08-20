// 6. 구조분해할당(비구조화할당)
// 6.1 alias
const { name, age } = {name: "kim", age: 20 };
console.log(name);
console.log(age);

const [kim, park] = [10, 20];
console.log(kim);
console.log(park);

const {name: uname,
        age: uage,
        address : {city: ucity},
        food: [apple, banana],
} = {
    name: "kim",
    age: 20,
    address: {city: "seoul"},
    food : ["apple", "banana"],
};

console.log(uname);
console.log(uage);
console.log(ucity);
console.log(apple, banana);


const [
    { name: firstName, age: firstAge },
    { name: secondName, age: secondAge }
] = [
    {name : "kim", age: 20},
    {name: "park", age: 30},
]

console.log(firstName, firstAge, secondName, secondAge);


const {
    members: [{name: fname, age: fage}, {name: sname, age: sage}],
} = {
    members: [
        { name : "kim", age: 20},
        { name: "park", age: 30},
    ],
};

console.log(fname, fage, sname, sage);


function userInfo({name = "kim", age = 20}) {
    console.log(name, age);
}

userInfo();

function sum (a = 10, b = 20) {
    return a + b;
}
console.log(sum());


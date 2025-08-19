// 1. 클래스 문법
// 2. 클래스는 class 키워드를 사용해서 선언한다.
// 3. 클래스는 내부에 constructor 메소드를 가지고 있다.
class Shape {
    constructor(color) {
      this.color = color;
    }
    getColor() {
      return this.color;
    }
}

// 상속
// extends 키워드를 사용해서 상속을 한다.
class Rectangle extends Shape {
    // 상속을 하든, 상속을 안하든 반드시 constructor를 가지고 있어야 한다.
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rect1 = new Rectangle("blue", 10, 20);
console.dir(rect1.getColor());
console.log(rect1.getArea());
console.dir(rect1);
console.log(rect1.constructor);
console.log(rect1.constructor.name);
console.log(Reflect.ownKeys(rect1));
console.log(Reflect.ownKeys(rect1.__proto__));
console.log(Reflect.ownKeys(rect1.__proto__.__proto__));
console.log(rect1.__proto__.constructor);

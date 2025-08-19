//1. 도형
function Shape(color) {
  this.color = color;
//   this.getColor = function () {
//     return this.color;
//   };
}

Shape.prototype.getColor = function () {
    return this.color;
};

//2. 사각형
function Rectangle(color, width, height) {
  Shape.call(this, color);
  this.width = width;
  this.height = height;
//   this.getArea = function () {
//     return this.width * this.height;
//   };
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
const rect1 = new Rectangle("blue", 10, 20);
console.log(rect1.getColor());
console.log(rect1);
console.log(Shape.prototype.constructor);
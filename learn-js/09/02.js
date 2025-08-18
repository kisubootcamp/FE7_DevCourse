//1 
function Person(name){
    this.name = name; 
}
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`;
};

const john = new Person("John");
john.greet();


//2 

function Car(brand){
    this.brand = brand; 
}

Car.prototype.start = function(){ 
  return   ` ${this.brand} has started`
}

const myCar = new Car('toyota');
myCar.start();

//3 

function Rectangle(width, height){
    this.width = width;
    this.height = height ;  
}   

Rectangle.prototype.area= function(){ 
   return  this.width * this.height
}

const rect = new Rectangle(5, 10);
console.log(rect.area());

//4 

function Animal(name){
    this.name= name; 
}
Animal.prototype.speak = function(){
    return `${this.name} makes a sound`
}
const animal = new Animal(); 
animal.speak

//5 

function Dog(name){
    this.name= name; 
}

Dog.prototype.speak =function(){
    console.log("Animal makes a sound")}


function Animal(name){
    Dog.call(this.name);
}


1.prototype = Object.create()
    
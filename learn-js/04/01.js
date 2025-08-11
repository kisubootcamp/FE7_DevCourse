// 원하는 만큼 함수안에 로직을 넣을 수 있음 
// 중괄호 안에 해당 
// 함수를 정의한다 
// 함수를 호출한다 

function greet(){
    console.log(greet);  //<--   함수 선언식 (함수 선언문) 
}  
greet(); <    //호출 ( 실행 ) 하는법 

// 함수 표현식 

const hello = function hello (){
    console.log( "hello");  
}  

hello();
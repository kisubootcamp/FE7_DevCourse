function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `책 제목 : ${this.title}, 저자 : ${this.author}, 출판년도 : ${this.year}`;
  };
}
const book1 = new Book("자바스크립트 입문", "민선", 2003);
const book2 = new Book("클로저 이해하기", "지수", 2000);

console.log(book1.getSummary());
console.log(book2);

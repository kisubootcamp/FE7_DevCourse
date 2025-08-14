function animal1() {
  this.animalName = "곰이";
  this.animalType = "고양이";
  this.animalAge = 8;
  this.animalGender = "male";
  this.animalInfo = function () {
    return `&{this.animalAge},는 뭐시기 ${this.animalName}이고,
     ${this.animalType}입니다.`;
  };
}
const nim = new animal1();
console.log(nim);
nim(animalInfo); // 생성자 함수로 만들어진 객체를 인스턴스 < ==

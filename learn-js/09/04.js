// 상속 예제 2

function Apliance(power) {
  this.powerOn = !!powerOn; // 명시적으로 true/false로 변환
}
Apliance.prototype.toggle = function () {
  this.powerOn = !this.powerOn;
  return this.powerOn;
};

function WashingMachine(powerOn, mode) {
  Apliance.call(this, powerOn);
  this.mode = mode || "normal"; // 기본 모드 설정
}

WashingMachine.prototype = Object.create(Apliance.prototype);
WashingMachine.prototype.constructor = WashingMachine;

WashingMachine.prototype.wash = function () {
  if (!this.powerOn) return `Caanot wash : power off`;
  return "Whashng ... ${this.mode}";
};

const wm = new WashingMachine(false, "quick");
console.log(wm.wash());
console.log(wm.toggle());
console.log(wm.wash());

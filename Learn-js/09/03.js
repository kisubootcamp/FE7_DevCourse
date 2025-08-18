function Appliance(powerOn) {
  this.powerOn = !!powerOn;
}
Appliance.prototype.toggle = function () {
  this.powerOn = !this.powerOn;
  return this.powerOn;
};
function WashingMachine(powerOn, mode) {
  Appliance.call(powerOn);
  this.mode = mode || "normal";
}
WashingMachine.prototype = Object.create(Appliance.prototype);
WashingMachine.prototype.constructor = WashingMachine;

WashingMachine.prototype.wash = function () {
  if (!this.powerOn) return `Cannot wash: power off`;
  return `Washing ... ${this.mode}`;
};

const wm = new WashingMachine(false, "quick");
console.log(wm.wash());
console.log(wm.toggle());
console.log(wm.wash());

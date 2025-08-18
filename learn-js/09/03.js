function Apliance(powerOn) {
	this.powerOn = powerOn;
}
Apliance.prototype.toggle = function () {
	this.powerOn = !this.powerOn;
	return this.powerOn;
};

function WashingMachine(powerOn, mode) {
	Apliance.call(this, powerOn);
	this.mode = mode || "normal";
}
WashingMachine.prototype = Object.create(Apliance.prototype);
WashingMachine.prototype.constructor = WashingMachine;

WashingMachine.prototype.wash = function () {
	if (!this.powerOn) return `Cannot wash : power off`;
	return `Wasing .. ${this.mode}`;
};

const washingMachine1 = new WashingMachine(false, "quick");
console.log(washingMachine1.wash());
console.log(washingMachine1.toggle());
console.log(washingMachine1.wash());

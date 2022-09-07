/*
Builder pattern (Creational)
Clear creation syntax for complex objects
*/

function CarBuilder(brand, model) {
	this.brand = brand;
	this.model = model;

	this.setWeight = (w) => {
		this.weight = w;
		return this;
	};

	this.setHorsePower = (hp) => {
		this.horsePower = hp;
		return this;
	};
}

const ferrari = new CarBuilder("Ferrari", "Roma")
	.setHorsePower(600)
	.setWeight(1500);

console.log(ferrari.horsePower); //600
console.log(ferrari.weight); //1500
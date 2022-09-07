/*
Strategy pattern (Behavioural)
Family of similar logic, easily swappable
*/
const UPS = () => {
	const calculate = () => {
		return 2.3;
	};
	return { calculate };
};

const Fedex = () => {
	const calculate = () => {
		return 4;
	};
	return { calculate };
};

const Poste = () => {
	const calculate = () => {
		return 1;
	};

	return { calculate };
};

const Shipping = () => {
	let company = "";
	const setStrategy = (c) => {
		company = c;
	};
	const calculate = () => {
		return company.calculate();
	};

	return { setStrategy, calculate };
};

const fedex = Fedex();
const poste = Poste();
const ups = UPS();
const shipping = Shipping();

shipping.setStrategy(fedex);
console.log("Fedex: ", shipping.calculate()); //4
shipping.setStrategy(poste);
console.log("Poste: ", shipping.calculate()); //1
shipping.setStrategy(ups);
console.log("Ups: ", shipping.calculate()); //2.3

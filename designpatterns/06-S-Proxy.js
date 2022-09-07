/*
Proxy pattern (Structural)
Placeholder for another object, we use the proxy instead of the real object, can save resources.
*/

const CarsAPI = () => {
	const getPrice = (car) => {
		console.log("Calling API...");
		switch (car) {
			case "Toyota":
				return 20000;
			case "Ferrari":
				return 300000;
				break;
			case "Zenvo":
				return 2000000;
			default:
				break;
		}
	};

	return { getPrice };
};

const myAPI = CarsAPI();

console.log("CarsAPI calls:");
console.log(myAPI.getPrice("Toyota")); //Calling API...
console.log(myAPI.getPrice("Ferrari")); //Calling API...
console.log(myAPI.getPrice("Zenvo")); //Calling API...
console.log(myAPI.getPrice("Toyota")); //Calling API...
console.log(myAPI.getPrice("Ferrari")); //Calling API...
console.log(myAPI.getPrice("Zenvo")); //Calling API...

const CarsProxy = () => {
	const realApi = CarsAPI();
	let cache = {};
	const getPrice = (car) => {
		if (!cache[car]) {
			cache[car] = realApi.getPrice(car);
		}else{
			console.log("From cache")
		}
		return cache[car];
	};

	return { getPrice };
};

const newApi = CarsProxy();

console.log("Proxy calls:");
console.log(newApi.getPrice("Toyota")); //Calling API...
console.log(newApi.getPrice("Ferrari")); //Calling API...
console.log(newApi.getPrice("Zenvo")); //Calling API...
console.log(newApi.getPrice("Toyota")); //From cache
console.log(newApi.getPrice("Ferrari")); //From cache
console.log(newApi.getPrice("Zenvo")); //From cache

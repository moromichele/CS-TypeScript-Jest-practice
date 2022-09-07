/*
Factory pattern (Creational)
Creates many similar objects easily
*/
const Developer = (n) => {
	const name = n;
	const type = "DEVELOPER";
	return { name, type };
};

const Tester = (n) => {
	const name = n;
	const type = "TESTER";
	return { name, type };
};

const EmployeeFactory = () => {
	const create = (name, type) => {
		switch (type) {
			case 1:
				return Developer(name);
				break;
			case 2:
				return Tester(name);
			default:
				break;
		}
	};

	return { create };
};

const myFactory = EmployeeFactory();
const employees = [];
employees.push(myFactory.create("Bob", 1));
employees.push(myFactory.create("Ted", 2));
console.log(employees);

const sayType = (e) => {
	console.log(e.type);
};

employees.forEach((e) => sayType(e)); //DEVELOPER TESTER

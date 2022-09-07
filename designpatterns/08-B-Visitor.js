/*
Visitor pattern (Behavioural)
Lets an external visitor add functionalities to the object
*/

function Employee(n, s) {
	this.name = n;
	this.salary = s;

	this.getSalary = () => {
		return this.salary;
	};

	this.setSalary = (s) => {
		this.salary = s;
	};

	this.accept = (fn) => {
		fn(this);
	};
}

const io = new Employee("Bob", 10000);
console.log(io.getSalary()); //10000

const extraSalary = (e) => {
	e.setSalary(e.getSalary() * 2);
};

io.accept(extraSalary);

console.log(io.getSalary()); //20000

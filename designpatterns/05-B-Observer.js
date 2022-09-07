/*
Observer pattern (Behavioural)
1 to many relation, observer waits for subject to do stuff
*/

const Subject = () => {
	let observers = [];

	const subscribe = (fn) => {
		observers.push(fn);
	};

	const unsubscribe = (fn) => {
		observers = observers.filter((o) => o != fn);
	};

	const trigger = () => {
		observers.forEach((fn) => fn());
	};

	return { subscribe, unsubscribe, trigger };
};

const sayHi = () => {
	console.log("Hi");
};

const sayHello = () => {
	console.log("Hello");
};

const subj = Subject();

subj.subscribe(sayHi);
subj.subscribe(sayHello);
subj.trigger(); //Hi Hello

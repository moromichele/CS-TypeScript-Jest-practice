/*
Singleton pattern (Creational)
When you need at most a single instance of an object
*/
const Singleton = (() => {
	//IIFE
	const ProcessManager = () => {
		const numProcess = 0;
		return { numProcess };
	};

	let processManager = null;

	const createProcessManager = () => {
		processManager = ProcessManager();
		return { processManager };
	};

	const getProcessManager = () => {
		if (!processManager) {
			console.log("creating new..");
			processManager = createProcessManager();
		} else {
			console.log("already created, passing the existing one");
		}
		return processManager;
	};

	return { getProcessManager };
})();

const pM1 = Singleton.getProcessManager(); //creating new
const pM2 = Singleton.getProcessManager(); //already created ..
console.log(pM1 === pM2); //true

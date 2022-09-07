const LinkedList = () => {
	let HEAD = null;
	let TAIL = null;
	let length = 0;

	const append = (value) => {
		const newNode = Node(value);

		if (!HEAD) {
			HEAD = newNode;
			TAIL = HEAD;
		} else {
			TAIL.next = newNode;
			TAIL = newNode;
		}
		length++;
	};

	const prepend = (value) => {
		const newNode = Node(value);
		if (!HEAD) {
			HEAD = newNode;
			LAST = HEAD;
		} else {
			newNode.next = HEAD;
			HEAD = newNode;
		}
		length++;
	};

	const size = () => {
		return length;
	};

	const head = () => {
		if (!HEAD) return "Empty list";
		return HEAD;
	};

	const tail = () => {
		if (!HEAD) return "Empty list";
		return TAIL;
	};

	const at = (i) => {
		if (i > length - 1 || i < 0) return "ERROR: invalid index";
		if (!HEAD) return "Empty list";
		let x = 0;
		let curr = HEAD;
		while (true) {
			if (i === x) return curr;
			curr = curr.next;
			x++;
		}
	};

	const pop = () => {
		if (!HEAD) return;
		if (HEAD === TAIL) {
			HEAD = null;
			TAIL = null;
			length--;
			return;
		}
		let curr = HEAD;

		while (true) {
			if (curr.next === TAIL) {
				curr.next = null;
				TAIL = curr;
				length--;
				return;
			}
			curr = curr.next;
		}
	};

	const contains = (v) => {
		if (!HEAD) return false;

		let curr = HEAD;

		while (curr !== TAIL) {
			if (curr.value === v) {
				return true;
			}
			curr = curr.next;
		}

		return curr.value === v ? true : false;
	};

	const find = (v) => {
		if (!HEAD) return false;

		let curr = HEAD;
		let x = 0;
		while (curr !== TAIL) {
			if (curr.value === v) {
				return x;
			}
			curr = curr.next;
			x++;
		}

		return curr.value === v ? length - 1 : null;
	};

	const insertAt = (i, v) => {
		if (i < 0 || i > length || (i != 0 && !HEAD)) {
			console.log("insertAt ", i, "Error: invalid index");
			return;
		}

		let curr = HEAD;
		let x = 0;

		if (i === 0) {
			prepend(v);
			return;
		}

		if (i === length) {
			append(v);
			return;
		}

		while (true) {
			if (x === i - 1) {
				const newNode = Node(v);
				newNode.next = at(i);
				curr.next = newNode;
				length++;
				return;
			}
			curr = curr.next;
			x++;
		}
	};

	const removeAt = (i) => {
		if (i < 0 || i > length-1 || (i != 0 && !HEAD)) {
			console.log("insertAt ", i, "Error: invalid index");
			return;
		}

		let curr = HEAD;
		let x = 0;

		if (i === 0) {
			HEAD = HEAD.next;
			length--;
			return;
		}

		if (i === length-1) {
			pop();
			return;
		}

		while (true) {
			if (x === i - 1) {
				curr.next = at(i + 1);
				length--;
				return;
			}
			curr = curr.next;
			x++;
		}
	};

	const toString = () => {
		if (!HEAD) {
			return "Empty list";
		} else {
			let curr = HEAD;
			let retString = "";
			while (true) {
				retString = retString + "( " + curr.value + " )" + " -> ";
				if (curr === TAIL) return retString + " null";
				curr = curr.next;
			}
		}
	};
	return {
		append,
		prepend,
		size,
		head,
		tail,
		at,
		pop,
		contains,
		find,
		toString,
		insertAt,
	};
};

const Node = (v) => {
	const value = v;
	const next = null;

	return { value, next };
};

const ll = LinkedList();
ll.append(1);
ll.append(2);
ll.prepend(0);
ll.append(3);
ll.append(4);
ll.insertAt(6, 100);
console.log(ll.toString());

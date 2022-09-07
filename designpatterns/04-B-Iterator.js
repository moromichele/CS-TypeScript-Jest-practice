/*
Singleton pattern (Behavioural)
To loop any collection of objects, allows custom ways to loop
*/

const items = [1, "abc", false, 1.24];

const Iterator = (c) => {
	const collection = c;
	let index = 0;

	const hasNext = () => {
		return index < collection.length;
	};

	const next = () => {
		return collection[index++];
	};

	return { hasNext, next };
};

const myIterator = Iterator(items);

while (myIterator.hasNext()) {
	console.log(myIterator.next()); //1 "abc" false 1.24
}

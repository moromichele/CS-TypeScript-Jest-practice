/*
Mediator pattern (Behavioural)
Define ann objects that controls how other objects interact with eachother
*/

const Member = (n) => {
	const name = n;
	let chatroom = null;

	const send = (mex, toMember) => {
		chatroom.send(mex, name, toMember);
	};

	const receive = (mex, fromMember) => {
		console.log("From: ", fromMember, " message: ", mex);
	};

	const setChatroom = (c) => {
		chatroom = c;
	};
	return { name, send, receive, setChatroom };
};

function Chatroom() {
	this.members = {};
	this.addMember = (m) => {
		this.members[m.name] = m;
		m.setChatroom(this);
	};
	this.send = (mex, from, to) => {
		to.receive(mex, from);
	};
}

const bob = Member("Bob");
const peter = Member("Peter");

const myChatroom = new Chatroom();
myChatroom.addMember(bob);
myChatroom.addMember(peter);
bob.send("Hello peter", peter); //From:  Bob  message:  Hello peter

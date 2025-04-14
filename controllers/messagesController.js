const db = require('../db/queries');

async function getMessages(req, res) {
	const messages = await db.getAllMessages();
	console.log('Messages: ', messages);

	res.render('index', { 
		title: 'Mini Message Board', 
		messages: messages 
	});
}

async function getMessage(req, res) {
	console.log(Number(req.params.msgId))
	const message = await db.getMessage(Number(req.params.msgId));
	console.log('Message: ', message);

	res.render('message', { 
		mes: message 
	});
}

function createMessagesGet(req, res) {
	res.render('form');
}

async function createMessagesPost(req, res) {
	await db.insertMessage([req.body.msg, req.body.name, new Date()]);
	res.redirect("/");
}

module.exports = {
	getMessages,
	getMessage,
	createMessagesGet,
	createMessagesPost,
}

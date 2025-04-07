const { Router } = require('express');

const indexRouter = Router();

let lastId = 2;

const messages = [
	{
		id: 1,
		text: 'Hello There!',
		user: 'General Kenobi',
		added: new Date(),
	},
	{
		id: 2,
		text: 'General Kenobi . . .',
		user: 'General Grievous',
		added: new Date(),
	},
];

indexRouter.get('/new', (req, res) => {
	res.render('form');
});

indexRouter.post('/new', (req, res) => {
	messages.push({ 
		id: ++lastId,
		text: req.body.msg, 
		user: req.body.name, 
		added: new Date(),
	});
	res.redirect("/");
});

// indexRouter.get('/:msgId', (req, res) => {
// 	res.render('message', { messages: messages });
// });

indexRouter.get('/', (req, res) => {
	res.render('index', { title: 'Mini Message Board', messages: messages });
});

module.exports = indexRouter;

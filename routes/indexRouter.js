const { Router } = require('express');
const indexRouter = Router();
const messagesController = require('../controllers/messagesController');

indexRouter.get('/new', messagesController.createMessagesGet);
indexRouter.post('/new', messagesController.createMessagesPost);

indexRouter.get('/', messagesController.getMessages);
indexRouter.get('/favicon.ico', (req, res) => res.status(204).end());
indexRouter.get('/:msgId', messagesController.getMessage);

module.exports = indexRouter;

require('dotenv').config();
const express = require('express');
const path = require('node:path');
const app = express();

const indexRouter = require('./routes/indexRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

const PORT = process.env.PORT || 3000;

app.use('/', indexRouter);

app.listen(PORT, () => {
	console.log("Up and running. Over.");
});

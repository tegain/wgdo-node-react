require('../config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Post } = require('./models/post');

const app = express();
const port = process.env.API_PORT;

app.use(bodyParser.json());

app.get('/posts', (req, res) => {
	Post.find({}).then((posts) => {
		res.send({ posts });
	});
});

app.listen(port, () => {
	console.log(`Started on port ${port}`);
	console.log(`Open http://localhost:${port}`);
});

module.exports = { app };

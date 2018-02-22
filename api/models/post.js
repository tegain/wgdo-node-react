const mongoose = require('mongoose');

const Post = mongoose.model('Post', {
	title: {
		type: String,
		required: true,
		minlength: 5,
		trim: true
	},
	text: {
		type: String,
		required: true,
		minlength: 10,
		trim: true
	}
});

module.exports = { Post };
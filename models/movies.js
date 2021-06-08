var mongoose = require('mongoose');
var MovieSchema = mongoose.Schema({
	title: String,
	url: String,
	description: String,
	rating: {
		type: Number,
		min: 0,
		max: 5
	},
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User"
		},
		username: String
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

module.exports = mongoose.model("Movie", MovieSchema);
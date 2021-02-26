var mongoose = require('mongoose');
var commentSchema =  mongoose.Schema({
	text: String,
	rat: 
	{
		type: Number,
		min: 0,
		max: 5
	},
	author: {
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref:"User"
		},
		username:String 
	}
});
module.exports = mongoose.model("Comment",commentSchema);
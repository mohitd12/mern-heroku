const mongoose = require('mongoose');

const schema = new mongoose.Schema(
	{
		photo: { type: String },
		name: { type: String },
		post: { type: String },
		description: { type: String },
		// 0=false,1=true
		active: { type: Number, default: 1, enum: [ 0, 1 ] }
	},
	{ timestamps: true, versionKey: false }
);

module.exports = mongoose.model('testimonial', schema);

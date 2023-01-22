const mongoose = require("mongoose");

const FAQ_Schema = mongoose.Schema(

	{
		categoryId: {

			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Category'

		},
		question: {

			type: String,
			required: true
		}
		,
		answer: {


			type: String,
			required: true
		}

	}
	, { timestamps: true })
module.exports = FAQ = FAQ_Schema;
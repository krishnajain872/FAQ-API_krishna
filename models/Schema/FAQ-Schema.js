const mongoose = require("mongoose");

const FAQ_Schema = mongoose.Schema(

	{
		categoryId: {

			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Category'

		},
		question: {
			language: {
				type: String,
				required: true
			},
			question_content: {
				type: String,
				required: true
			}
		},
		answer: {
			language: {
				type: String,
				// required: true
			},
			answer_content: {
				type: String,
				// required: true
			}
		}
	}
	, { timestamps: true })
module.exports = FAQ = FAQ_Schema;
const mongoose = require("mongoose");

const FAQ_Schema = mongoose.Schema(

	{

		categoryId: {
			type: mongoose.Schema.Types.ObjectId,
			required: true
		}
		,
		quetion:
		{

			type: String,
			required: true

		}

		,
		ans:
		{
			type: String,
			default: "will respond soon",
			required: true
		}


	}
	, { timestamps: true })
module.exports = FAQ = FAQ_Schema;
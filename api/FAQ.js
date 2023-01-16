const express = require("express");
const router = express.Router();

// models
const FAQModel = require("../models/FAQ-Model");


// FAQ Get 
router.get("/FAQ", async (req, res) => {
	try {
		const FAQ = await FAQModel.find()
		res.status(202).send(FAQ);
		console.log(FAQ);

	} catch (e) {
		res.status(404).send(e);
		console.log(e);
	}
})
router.get("/FAQ/:id", async (req, res) => {
	try {
		const FAQ = await FAQModel.findById(req.params.id)
		res.status(202).send(FAQ);
		console.log(FAQ);

	} catch (e) {
		res.status(404).send(e);
		console.log(e);
	}
})


// FAQ POST
router.post("/FAQ", async (req, res) => {
	try {
		const FAQ = new FAQModel(req.body);
		console.log(FAQ);
		const FAQSave = await FAQ.save();
		//  FAQSave.
		res.status(200).send(FAQSave);
		console.log(FAQSave);

	} catch (e) {
		res.status(400).send(e);
		console.log(e);
	}
})



// delete FAQ
router.delete("/FAQ/:id", async (req, res) => {
	try {
		const _id = req.params.id;
		// const FAQ = await FAQModel.findById(_id);
		// console.log(blog);
		const FAQ = await FAQModel.findByIdAndDelete(_id);
		// const SAVE_del_blog = await Blog.save(_id);
		if (!FAQ) {
			console.log(FAQ + "   FAQ deleted")
			return res.status(404).send("FAQ not exist");
		} else {
			res.status(200).send(FAQ)
		}
		// res.status(201).send(blog);
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}

})




// update something in a FAQ with id 
router.patch("/FAQ/:id", async (req, res) => {
	try {
		const _id = req.params.id
		let updateFAQ = await FAQModel.findOneAndUpdate(_id, req.body);
		updateFAQ = await FAQModel.find({ id: _id }).catch((err) => { console.log('not workings' + err) });
		res.send(updateFAQ);

	} catch (err) {
		res.status(404).send(err);
	}
})


module.exports = router
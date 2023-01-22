const express = require("express");
const router = express.Router();

// models
const categoryModel = require("../models/CategoryModel");

// category Get
router.get("/category", async (req, res) => {
    try {
        const category = await categoryModel.find();
        res.status(202).send(category);
        console.log(category);
    } catch (e) {
        res.status(404).send(e);
        console.log(e);
    }
});
router.get("/category/:id", async (req, res) => {
    try {
        const category = await categoryModel.findById(req.params.id);
        res.status(202).send(category);
        console.log(category);
    } catch (e) {
        res.status(404).send(e);
        console.log(e);
    }
});

// category POST
router.post("/category", async (req, res) => {
    try {
        const category = new categoryModel({
            name: req.body.name,
            description: req.body.description
            ,
            deleted: req.body.deleted

        });

        console.log(category);
        const categorySave = await category.save();
        //  categorySave.
        res.status(200).send(categorySave);
        console.log(categorySave);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
});

// delete category
router.delete("/category/:id", async (req, res) => {
    try {
        const _id = req.params.id;

        const category = await categoryModel.findByIdAndUpdate(_id, { deleted: true });
        const categorydata = await categoryModel.findById(_id);

        if (!category) {
            console.log(category + "   category not exist");
            return res.status(404).send("category not exist");
        } else {
            res.status(200).send(categorydata);
        }
        // res.status(201).send(blog);
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
});

// update something in a category with id
router.patch("/category/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        let updatecategory = await categoryModel.findOneAndUpdate(_id, req.body);
        updatecategory = await categoryModel.find({ id: _id }).catch((err) => {
            console.log("not workings" + err);
        });
        res.send(updatecategory);
    } catch (err) {
        res.status(404).send(err);
    }
});

module.exports = router;

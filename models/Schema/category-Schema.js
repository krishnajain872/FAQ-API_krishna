const mongoose = require("mongoose");

const categoryNameEnum = {
    values: ['REPAIR', 'SCREEN_PROTECTION', 'ECOMMERCE'],
    message: 'Invalid category name,not in ENUM Array   '
};

const category_Schema = mongoose.Schema(
    {
        name: { type: String, required: true, enum: categoryNameEnum, unique: true, message: 'Category name should be unique dublicate values are not allowed!!!' },
        description: { type: String, required: false },
        deleted: { type: Boolean, default: false }
    }
    , { timestamps: true })
module.exports = category = category_Schema;
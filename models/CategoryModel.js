
const mongoose = require("mongoose");

const Category_Schema = require("./Schema/category-Schema.js");

module.exports = Category = mongoose.model("Categories", Category_Schema);
// module.exports = Category_Schema
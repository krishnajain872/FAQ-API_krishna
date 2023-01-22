const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/category", {
    useNewUrlParser: true,
    // useFindAndModify: true,
    useUnifiedTopology: true
}).then(console.log("connection established with category DATABASE")).catch((e) => console.log("bhaii error aagya  /n " + e))


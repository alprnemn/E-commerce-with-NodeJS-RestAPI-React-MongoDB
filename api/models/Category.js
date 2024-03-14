const mongoose = require("mongoose");

// Ctegory Schema
const categorySchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    }
});

//Category Model with Schema
const Category = mongoose.model("Category",categorySchema);

module.exports = Category;
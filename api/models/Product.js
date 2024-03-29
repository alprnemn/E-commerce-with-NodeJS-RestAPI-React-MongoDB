const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Category"
    },
    image : {
        type : String,
        required : true
    },
    bestseller : {
        type : Boolean,
        required : false,
        default : false
    }
},{timestamps : true});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;



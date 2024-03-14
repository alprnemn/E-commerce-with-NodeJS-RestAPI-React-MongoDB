const mongoose = require("mongoose");

function generateOrderNo() {
    return Math.floor(1000000 + Math.random() * 9000000);
}

const orderSchema = mongoose.Schema({
    orderNo: {
        type: Number,
        required : true,
        default: generateOrderNo
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    products : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    }],
    price : {
        type : Number,
        required : true
    },
    date : {
        type : Date,
        required : false,
        default : Date.now
    },
    adress : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    delivered : {
        type : Boolean,
        required : false,
        default : false
    }

})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
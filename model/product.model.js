const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName : String,
    image: String,
    title : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : [String]
    },
    manufacture_By: {
        line1 : String,
        line2 : String,
        pincode : Number
    }
}); 

module.exports = mongoose.model('product',productSchema);
const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: { 
        type: String, 
        required: true
    },
    image: String,
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: [String]
    },
    manufacture_By: {
        line1: String,
        line2: String,
        pincode: Number
    },
    isDelete: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('product', productSchema);
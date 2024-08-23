const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: Number,
    profileImage: String,
    password: {
        type: String,
        required: true
    },
    addresss: {
        line1: String,
        line2: String,
        pincode: Number
    },
    isDelete: {
        type: Boolean,
        default: false
    }
},
    {
        versionKey: false,
        timestamps: true
    });

module.exports = mongoose.model('user', userSchema);
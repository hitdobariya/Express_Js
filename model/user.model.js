const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    emp_email: {
        type: String,
        required: true
    },
    emp_phone: {
        type: Number
    },

    password: {
        type: String,
        required: true
    },
    department: {
        type: String
    },
    age: {
        type: Number,
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
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    department: {
        type: String
    },
    age: {
        type: Number
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('User', UserSchema);
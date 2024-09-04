const User = require('../model/user.model');

class userservices {

    /*register user */
    async register(body) {
        return await User.create(body)
    };

    /*get all user */
    async getalluser(body) {
        return await User.find(body)
    };

    /*get single user */
    async getuser(body) {
        return await User.findOne(body)
    };

}

module.exports = userservices;
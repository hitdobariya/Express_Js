const Product = require('../model/product.model');

class productservices {

    /*Addnew product */
    async addproduct(body) {
        return await Product.create(body)
    };

    /*get all product */
    async getallproduct(body) {
        return await Product.find({ isDelete: false })
    };

    /*get single product */
    async getproduct(body) {
        return await Product.findOne(body)
    };

}

module.exports = productservices;
const Product = require('../model/product.model');

class productservices {

    /*Addnew product */
    async addproduct(body) {
        return await Product.create({ ...req.body })
    };

    /*get all product */
    async getallproduct(body) {
        return await Product.find({ isDelete: false })
    };

    /*get single product */
    async getproduct(body) {
        return await Product.findById( body)
    };

}

module.exports = productservices;
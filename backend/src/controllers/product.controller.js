const makeProductService = require('../services/product.services');

async function createProduct(req, res) {
    if (!req.body?.SP_Ten) {
        return res.status(400).send({ message: 'Tên sản phẩm không được để trống' });
    }

    try {
        const productService = makeProductService();
        const product = await productService.createProduct(req.body);
        return res.send(product);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while creating the product' });
    }
}

async function getProductsByFilter(req, res) {
    try {
        const productService = makeProductService();
        const products = await productService.getManyProducts(req.query);
        return res.send(products);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while retrieving products' });
    }
}

async function updateProduct(req, res, next) {
    if (Object.keys(req.body).length == 0) {
        return next(new ApiError(400, "Data to update can not be empty"));
    }

    try {
        const productService = makeProductService();
        const updated = await productService.updateProduct(
            req.params.id,
            req.body
        );
        if (!updated) {
            return next(new ApiError(404, "Product not found"));
        }
        return res.send({ message: "Product was update successfully" });
    } catch (error) {
        console.log(error);
        return next(
            new ApiError(500, `Error updating product with id=${req.params.id}`)
        );
    }
}

module.exports = {
    getProductsByFilter,
    createProduct,
    updateProduct,
};

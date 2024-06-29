const makeInvoiceService = require('../services/invoice.services');

async function createInvoice(req, res) {
    if (!req.body?.HoaD_GiaTriHopDong) {
        return res.status(400).send({ message: 'Giá trị hợp đồng không được để trống' });
    }

    try {
        const invoiceService = makeInvoiceService();
        const invoice = await invoiceService.createInvoice(req.body);
        return res.send(invoice);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while creating the invoice' });
    }
}

async function getInvoicesByFilter(req, res) {
    try {
        const invoiceService = makeInvoiceService();
        const invoices = await invoiceService.getManyInvoices(req.query);
        return res.send(invoices);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while retrieving invoices' });
    }
}

async function updateInvoice(req, res, next) {
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
    getInvoicesByFilter,
    createInvoice,
    updateInvoice,
};


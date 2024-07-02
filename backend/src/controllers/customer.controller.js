const makeContactsService = require('../services/customer.services');

async function createCustomer(req, res) {
    if (!req.body?.KH_Ten) {
        return res.status(400).send({ message: 'Tên khách hàng không được để trống' });
    }

    try {
        const customersService = makeContactsService();
        const contact = await customersService.createCustomer(req.body);
        return res.send(contact);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while creating the contact' });
    }
}

// Retrieve contacts of a user from the database
async function getCustomersByFilter(req, res) {
    try {
        const customersService = makeContactsService();
        const contacts = await customersService.getManycustomers(req.query);
        return res.send(contacts);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while retrieving contacts' });
    }
}

async function updateContact(req, res, next) {
  if (Object.keys(req.body).length == 0) {
    return next(new ApiError(400, "Data to update can not be empty"));
  }

  try {
    const customersService = makeContactsService();
    const updated = await customersService.updateCustomer(
      req.params.id,
      req.body
    );
    if (!updated) {
      return next(new ApiError(404, "Contact not found"));
    }
    return res.send({ message: "Contact was update successfully" });
  } catch (error) {
    console.log(error);
    return next(
      new ApiError(500, `Error updating contact with id=${req.params.id}`)
    );
  }
}

module.exports = {
    getCustomersByFilter,
    createCustomer,
    updateContact,
};

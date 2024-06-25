const makeContactsService = require('../services/customer.services');

async function createCustomer(req, res) {
    if (!req.body?.name) {
        return res.status(400).send({ message: 'Tên khách hàng không được tìm thấy' });
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

async function getCustomer(req, res) {
    try {
        const customersService = makeContactsService();
        const contact = await customersService.getCustomersById(req.params.id);
        if (!contact) {
            return res.status(404).send({ message: 'Contact not found' });
        } 
        return res.send(contact);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: `Error retrieving contact with id=${req.params.id}` });
    }
}

async function updateCustomer(req, res) {
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send({ message: 'Data to update cannot be empty' });
    }

    try {
        const customersService = makeContactsService();
        const update = await customersService.updateCustomer(req.params.id, req.body);
        if (!update) {
            return res.status(404).send({ message: 'Contact not found' });
        }
        return res.send({ message: 'Contact was updated successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: `Error updating contact with id=${req.params.id}` });
    }
}

async function deleteCustomer(req, res) {
    try {
        const customersService = makeContactsService();
        const deleted = await customersService.deleteCustomer(req.params.id);
        if (!deleted) {
            return res.status(404).send({ message: 'Contact not found' });
        }
        return res.send({ message: 'Contact was deleted successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: `Could not delete contact with id=${req.params.id}` });
    }
}

async function deleteAllCustomer(req, res) {
    try {
        const customersService = makeContactsService();
        const deleted = await customersService.deleteAllCustomers();
        return res.send({ message: `${deleted} contacts were deleted successfully` });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while removing all contacts' });
    }
}

module.exports = {
    getCustomersByFilter,
    deleteAllCustomer,
    getCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
};

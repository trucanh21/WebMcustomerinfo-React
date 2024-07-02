const makeContactsService = require('../services/admin.services');

async function registerAdmin(req, res) {
    if (!req.body?.QT_Ten) {
        return res.status(400).send({ message: 'Tên khách hàng không được để trống' });
    }
    try {
        const adminsService = makeContactsService();
        const contact = await adminsService.registerAdmin(req.body);
        return res.send(contact);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while creating the contact' });
    }
}

async function loginAdmin(req, res) {
    const { QT_Ten, matkhau } = req.body;
    if (!QT_Ten || !matkhau) {
        return res.status(400).send({ message: 'Tên hoặc mật khẩu không được để trống' });
    }

    try {
        const adminsService = makeContactsService();
        const contact = await adminsService.loginAdmin(QT_Ten, matkhau);
        if (!contact) {
            return res.status(401).send({ message: 'Tên hoặc mật khẩu không đúng' });
        } 
        return res.send(contact);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'An error occurred while logging in' });
    }
}

module.exports = {
    registerAdmin,
    loginAdmin,
};

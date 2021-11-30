const express = require('express');
const contactsController = require('../controllers/contactsController');
const router = express.Router();

router.get('/', contactsController.getMainPage);
router.get('/login', contactsController.getLoginPage);
router.get('/register', contactsController.getRegisterPage);
router.get('/add-user', contactsController.getAddPage);
router.post('/delete-contact', contactsController.deleteContact);
router.post('/add-contact', contactsController.postnewContact);
router.post('/add-account', contactsController.newAccount);
router.post('/login-account', contactsController.loginAccount);

module.exports = router;
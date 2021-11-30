const express = require('express');
const contactsController = require('../controllers/contactsController');
const router = express.Router();

router.get('/', contactsController.getMainPage);
router.get('/add-user', contactsController.getAddPage);
router.post('/delete-contact', contactsController.deleteContact);
router.post('/add-contact', contactsController.postnewContact);

module.exports = router;
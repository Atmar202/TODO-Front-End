const mongoose = require('mongoose');
const Contacts = mongoose.model('Contact');

exports.getMainPage = (req, res)=> {
    Contacts.find((error, items) => {
        if(!error){
            res.render('index.ejs', {contacts: items});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.getAddPage = (req, res) => {
    Contacts.find((error, items) => {
        if(!error){
            res.render('add.ejs', {contacts: items});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.postnewContact = (req, res) => {
    let firstname = req.body.newContactName;
    let lastname = req.body.newContactLastName;
    let phonenumber = req.body.newContactNumber;
    let newContact = new Contacts();
    newContact.phonenumber = phonenumber;
    newContact.firstname = firstname;
    newContact.lastname = lastname;

    newContact.save((error, response) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log("Failed to save data.");
        }
    });
}

exports.deleteContact = (req, res) => {
    const checkedItemId = req.body.delete;

    Contacts.findByIdAndRemove(checkedItemId, (error) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log('Failed to remove an item.');
        }
    });
}
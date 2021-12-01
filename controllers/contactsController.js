const mongoose = require('mongoose');
const Contacts = mongoose.model('Contact');
const fetch = require('node-fetch');

exports.getMainPage = (req, res)=> {
    // must add token here to authorize
    /*
    let url = 'https://localhost:44308/api/Accounts';
    fetch(url).then(res => { return res.json();
    // check data
    }).then(data => console.log("Data: "+data));
    */
    Contacts.find((error, items) => {
        if(!error){
            res.render('index.ejs', {contacts: items});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
};

exports.getLoginPage = (req, res)=> {
    Contacts.find((error, items) => {
        if(!error){
            res.render('login.ejs', {contacts: items});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
}

exports.getAddIndexPage = (req, res)=> {
    Contacts.find((error, items) => {
        if(!error){
            res.render('add-index.ejs', {contacts: items});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
}

exports.getRegisterPage = (req, res)=> {
    Contacts.find((error, items) => {
        if(!error){
            res.render('register.ejs', {contacts: items});
        } else {
            console.log('Failed to retrieve data.');
        }
    });
}

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
    let deadline = req.body.newDeadline;
    let subject = req.body.newSubject;
    let work_type = req.body.newWorkType;
    let work_date = req.body.newWorkDate;
    let newContact = new Contacts();
    newContact.deadline = deadline;
    newContact.subject = subject;
    newContact.work_type = work_type;
    newContact.work_date = work_date;

    newContact.save((error, response) => {
        if(!error){
            console.log(newContact);
            res.redirect('/add-index');
        } else {
            console.log("Failed to save data.");
        }
    });
}

exports.deleteContact = (req, res) => {
    const checkedItemId = req.body.delete;

    Contacts.findByIdAndRemove(checkedItemId, (error) => {
        if(!error){
            res.redirect('/add-index');
        } else {
            console.log('Failed to remove an item.');
        }
    });
}

exports.loginAccount = (req, res) => {
    const checkedItemId = req.body.delete;

    Contacts.findByIdAndRemove(checkedItemId, (error) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log('Failed to remove an item.');
        }
    });
}

exports.newAccount = (req, res) => {
    const checkedItemId = req.body.delete;

    Contacts.findByIdAndRemove(checkedItemId, (error) => {
        if(!error){
            res.redirect('/');
        } else {
            console.log('Failed to remove an item.');
        }
    });
}
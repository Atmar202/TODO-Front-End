const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    phonenumber: {
        type: Number
    }
});

mongoose.model('Contact', contactSchema);
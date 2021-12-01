const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    deadline: {
        type: String
    },
    subject: {
        type: String
    },
    work_type: {
        type: String
    },
    work_date: {
        type: String
    }
});

mongoose.model('Contact', contactSchema);
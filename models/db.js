const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PhonebookDB', { useNewUrlParser: true, useUnifiedTopology: true});
require('./contact');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
require('./models/db');
const mainPage = require('./routes/main');

const app = express();

app.set('view engine', ejs);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.use(mainPage);

app.use('*', (req, res) => {
    res.send('404 Page Not Found');
});

app.listen(4000, ()=> {
    console.log('Server is running on port 3000');
});

/*

app.get('/', (req, res) => {
    let url = 'https://localhost:5001/api/AuthManagement/Login';
    fetch(url).then(res => { return res.json();
    // check data
    }).then(data => console.log(data));
});
*/
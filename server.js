const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const fetch = require('node-fetch');
const app = express();

// https://github.com/p-kristjan/corona
// https://www.youtube.com/watch?v=LXmT6Nu8XFs / 5:11

app.use(bodyParser.urlencoded({
    extended: true 
}));
app.set('view engine', ejs);

app.get('/', (req, res) => {
    let url = 'http://localhost:18096';
    fetch(url).then(res => { return res.json();
    // check data
    }).then(data => console.log(data));
        /*
        Et saada kõige viimase kuupäeva objekti, kasutasin Object.keys() funktsiooni.
        Object.keys() tekitas massiivi kasutades oma väärtusteks timelineitems[0] sees
        asuvate objektide pealkirjasid.
        Hiljem leidsin timelineitems[0] seest objektid kasutades pealkirja, mis sain
        kätte eelmist meetodit kasutades.

        let title = api.data.countrytimelinedata[0].info.title;
        let source = api.data.countrytimelinedata[0].info.source;
        let timelineitemsArray = Object.keys(api.data.timelineitems[0]); 
        let firstObjTitle = timelineitemsArray[0];
        let lastObjTitle = timelineitemsArray[timelineitemsArray.length - 2];
        let firstObj = api.data.timelineitems[0][firstObjTitle];
        let lastObj = api.data.timelineitems[0][lastObjTitle];

        res.render('index.ejs', {
            title: title,
            firstHeader: firstObjTitle,
            lastHeader: lastObjTitle,
            firstNewDailyCases: firstObj.new_daily_cases,
            lastNewDailyCases: lastObj.new_daily_cases,
            firstTotalCases: firstObj.total_cases,
            lastTotalCases: lastObj.total_cases,
            firstTotalRecoveries: firstObj.total_recoveries,
            lastTotalRecoveries: lastObj.total_recoveries,
            source: source
        });
    }).catch(function(error){
        console.log(error);
    });
    */
});

let port = 44396; //SSLPORT
app.listen(port, () => {
    // ERROR: fetch is not defined
    console.log('Server is running on port: ' + port);
});
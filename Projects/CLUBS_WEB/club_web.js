const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;
const hostname = '127.0.0.1';

// Express specific stuff
app.use('/static', express.static('static'));// For serving static files
app.use(express.urlencoded());


// PUG specific stuff
app.set('view engine', 'pug');// for setting the template engine as pug
app.set('views', path.join(__dirname, 'views'));// set the view directory


// ENDPOINTS
app.get('/', (req,res) => {
    res.status(200).render('clubs_html.pug');
});


// Start the SERVER

app.listen(port, () => {
    console.log(`The application started successfully on http://${hostname}:${port}/`);
});

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

// app.get('/', (req,res) => {
//     res.status(200).render('index.pug');
// });
app.get('/', (req,res) => {
    const con = "This is the con text passed by using pug variable";
    const params = {'title' : "Title passsed by using PUG", 'content' : con};
    res.status(200).render('index.pug', params);
});

app.post('/', (req,res) => {
    // let output = req.body
    // console.log(output);

    name = req.body.name
    clas = req.body.clas
    event = req.body.event
    email = req.body.email
    output = `The name of applicant is ${name}, from class ${clas} want to register for event ${event}. The email provided is ${email} `;
    fs.writeFileSync('output.txt', output);

    const params = {'message' : "Your form is been submited successfully."};
    res.status(200).render('index.pug', params);
})

// Start the SERVER
app.listen(port, () => {
    console.log(`The application started successfully on http://${hostname}:${port}/`);
});

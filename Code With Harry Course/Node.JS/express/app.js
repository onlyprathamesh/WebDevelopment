const express = require('express');
const app = express();
const port = 80;

// For serving the static websites
app.use('/static', express.static('static'));


app.get('/', (req,res) => {
    res.status(200).send("This is Homepage of my first express app.");
});

app.get('/about', (req,res) => {
    res.send("This is About page of my first express app using GET.");
});

app.post('/about', (req,res) => {
    res.send("This is About page of my first express app using POST.");
});

app.get('/contact', (req,res) => {
    res.send("This is Contact page of my first express app.");
});

app.get('/this', (req,res) => {
    res.status(404).send("Error 404 Page not found");
});

app.listen(port, () => {
    console.log(`The application is started successfully on port: ${port}`);
});
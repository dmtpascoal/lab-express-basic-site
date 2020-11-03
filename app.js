const express = require('express');
const app = express(); //this represents our server

app.use(express.static('public'));

//Creating a route /home
app.get('/home', (request, response) =>{
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get('/about', (request, response) => {
    response.sendFile(__dirname + '/views/about.html');
});

app.get('/works', (request, response) => {
    response.sendFile(__dirname + '/views/works.html');
});

app.get('/gallery', (request, response) => {
    response.sendFile(__dirname + '/views/gallery.html');
});

app.listen(3000, () => {
    console.log('My first using express is waiting for requests');
});
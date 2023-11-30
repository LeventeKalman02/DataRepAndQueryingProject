//add axios
const axios = require('axios');

//setting express
const express = require('express');
const app = express();
const port = 4000;

//setting cors to server
const cors = require('cors');
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

//setting body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setting mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@leventekalman.bwavlir.mongodb.net/ProjectDB?retryWrites=true&w=majority');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//////////////////TESTING DATABASE//////////////////

//adding the book to the cloud database
const bookSchema = new mongoose.Schema({
    title: String,
    cover: String,
    author: String
});


//adds ability to add books and query them
const bookModel = mongoose.model('books', bookSchema);

//////////////////TESTING DATABASE//////////////////

//listening at local host 4000 for http request
app.get('/', (req, res) => {
    res.send('Hello World!');
});


//get the api from the external http link and send it to the client
app.get('/api/getquote', (req, res) => {
    axios.get('https://zenquotes.io/api/random').then(response => {
        // console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        // console.log(error.data);
        res.send(error.data);
    });
});

//get the api from the external http link and send it to the client
app.get('/api/getdailyquote', (req, res) => {
    axios.get('https://zenquotes.io/api/today').then(response => {
        // console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        // console.log(error.data);
        res.send(error.data);
    });
});


//listen for requests coming in
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
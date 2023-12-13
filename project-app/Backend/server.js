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

//linking to database
async function main() {
    await mongoose.connect('mongodb+srv://admin:admin@leventekalman.bwavlir.mongodb.net/ProjectDB?retryWrites=true&w=majority');
}

//adding the book to the cloud database
const QuoteSchema = new mongoose.Schema({
    quoteTitle: String,
    quoteAuthor: String
});

//adds ability to add books and query them
const quoteModel = mongoose.model('quotes', QuoteSchema);

//listening at local host 4000 for http request
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//used to parse the body of a http request
//gets the data from create when details are entered and output to console
app.post('/api/quotes', (req, res) =>{
    //callback function
      console.log(req.body);
      //writing data to the database
      quoteModel.create({
        quoteTitle: req.body.quoteTitle,
        quoteAuthor: req.body.quoteAuthor
      })
      .then(()=>{res.send("Book added successfully")})
      .catch(()=>(res.send("Error adding book")));
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
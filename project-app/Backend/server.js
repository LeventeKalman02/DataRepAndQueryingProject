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
    "title": String,
    "author": String,
    "quote": String
});

//adds ability to add books and query them
const quoteModel = mongoose.model('quotes', QuoteSchema);

//used to parse the body of a http request
//gets the data from create when details are entered and output to console
app.post('/quoteapi/quotes', (req, res) =>{
    //callback function
      console.log(req.body);
      //writing data to the database
      quoteModel.create({
          "title": req.body.title,
          "author": req.body.author,
          "quote": req.body.quote
      })
      .then(()=>{res.send("Success")})
      .catch(()=>(res.send("Error")));
});

//edit data in the database based off of id
app.put('/quoteapi/quote/:id', async (req, res) => {
    console.log("Update: " + req.params.id);
    let quotes = await quoteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(quotes);
});

//delete data from db based on id
app.delete('/quoteapi/quotes/:id', async (req, res) => {
    console.log("Delete: " + req.params.id);
    let quotes = await quoteModel.findByIdAndDelete(req.params.id);
    res.send(quotes);
});

//get all the records from database and set it to quotes variable asyncronously
app.get('/quoteapi/quotes', async(req, res) =>{
    //search database and bring back all records
    let quotes = await quoteModel.find({});
    res.json(quotes);
});

//get a single record from the database based off the id
app.get('/quoteapi/quotes/:id', async (req, res) => {
    console.log(req.params.id);
    let quotes = await quoteModel.findById(req.params.id);
    res.json(quotes);
});

app.get('/quoteapi/quote/:identifier', async (req, res) => {
    console.log(req.params.identifier);
    let quotes = await quoteModel.findById(req.params.identifier);
    res.send(quotes);
})

//////EXETRNAL API/////
//////////////////////////////////////////////////////////////////////////

//get the api from the external http link and send it to the client
app.get('/quoteapi/getquote', (req, res) => {
    axios.get('https://zenquotes.io/api/random').then(response => {
        // console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        // console.log(error.data);
        res.send(error.data);
    });
});

//get the api from the external http link and send it to the client
app.get('/quoteapi/getdailyquote', (req, res) => {
    axios.get('https://zenquotes.io/api/today').then(response => {
        // console.log(response.data);
        res.send(response.data);
    }).catch(error => {
        // console.log(error.data);
        res.send(error.data);
    });
});

//////////////////////////////////////////////////////////////////////////

//listen for requests coming in
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
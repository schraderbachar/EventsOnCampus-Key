const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

//bodyParser middleware- to help us connect
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

//config DB
const db = require("./config/keys").mongoURI;

//connect to mongoDb
mongoose.connect(
    db,{useNewUrlParser: true}
)
.then(() => console.log("Database Connected"))
.catch(err => console.log(err));


const PORT = process.env.PORT || 5000; //process.env.port is herokus port for when we deploy it live


app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
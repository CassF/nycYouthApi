require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const mongodb = require("mongodb");

//mpromise is depreceted - solves this problem. 
mongoose.Promise = global.Promise;

//connecting to DB 
mongoose.connect(process.env.MONGODB_URI);
//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(routes);

//Specifies the listening port
app.listen(process.env.PORT || 3002, () => {
    console.log(`Server listening on port ${process.env.PORT || 3002}`);
});
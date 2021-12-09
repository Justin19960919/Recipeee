const express = require("express");
const app = express();

// setup
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const session = require('express-session');
app.use(session({
  resave: false, saveUninitialized: true,
  secret: 'shhh, dont tell anyone'
}));

// require secrets: process.env.___ to get secrets
require("dotenv").config()

// connect to db
// mongoose.connect('(YOUR MONGODB URL)/Recipeee');
const recipeDB = "recipeDB";
mongoose.connect(`${process.env.MONGODB_LOCAL_BASE_URL}/${recipeDB}`);



// middleware
//app.use(cors()); // allow cross site

app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// reference static assets in public folder
app.use(express.static("./public"));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",

      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


// routes
app.get("/", (req, res) => {
  res.send("Hello world");
})



require('./controllers/recipe-service-db')(app);
require('./controllers/author-service-db')(app);
require('./controllers/user-service-db')(app);
require('./controllers/review-service-db')(app);
require('./controllers/weather-service')(app);

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`)
})


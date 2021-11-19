// Specified in package.json --> run npm start to start server
// app.js starter file

// require secrets
// require("dotenv").config()
// process.env.___ to get secrets



const express = require("express");
const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");

// require mongoose
const mongoose = require("mongoose");
mongoose.connect('(YOUR MONGODB URL)/Recipeee');



// middleware
/*
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// reference static assets in public folder
app.use(express.static("./public"));

*/


const app = express();

// require the routes from the routes folder,
// ex: const test = require("./routes/test");


app.get("/", (req, res) => {
  res.send("Hello world");
})



require('./controllers/recipe-service-db')(app);
require('./controllers/author-service-db')(app);
require('./controllers/user-service-db')(app);

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`)
})


//Import all our models
require('./models/users');
require('./models/posts');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postsRoutes');
const authorize = require('./middleware/requireAuth');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(postRoutes);

//Whenever someone makes a GET HTTP request to the root of our project directory
//To use the authorization middleware simply add the auth function before the callback function parameter
app.get('/', authorize, (req, res)=>{
    //Since we now have our web token we need to authorize access to our app based on it
    //res.send("Thali Express Server...");
    res.send(`Your email: ${req.user.email}`);
});

app.listen(3000,()=>{
    console.log("Thali Server: Listening on port 3000");
});

const mongoString = 'mongodb+srv://Nabihah:Couth@thali.yst0b.mongodb.net/Thali?retryWrites=true&w=majority';
mongoose.connect(mongoString);                                                              //No need for options object in Mongoose V6
//Just to check whether our connection is successful or not
mongoose.connection.on('connected',()=>{
    console.log("Connected to Thali Database");
});
mongoose.connection.on('error',(err)=>{
    console.log("Error connecting to the Thali Database", err);
});
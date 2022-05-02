//All request handling logic related to authentication
const express = require('express');
const mongoose = require('mongoose');
const Users = mongoose.model('Users');
const jwt = require('jsonwebtoken');

//Obj. that allows us to associate some num. of route handlers with it
const router = express.Router();

router.post('/signup', async (req, res)=>{
    const { userID, name, email, password, phoneNumber, address } = req.body;
    console.log(req.body);
    try{
        const user = new Users({ userID, name, email, password, phoneNumber, address });
        //This is an async. operation since mongoose has to reach out the mongoDB instance on the internet & initiate the save operation
        await user.save();
        //Creating the json web token by encoding the userID with a secret key
        const token = jwt.sign({ userID }, 'nskdjfbKDFYfjG');
        // res.send("User added successfully!");
        res.send({ token });
    }
    catch(err){
        const message = err.message
        //Setting the HTTP status code to 422
        if(message.includes("duplicate key error")){
            res.status(422).send("Username or Email already in use!");    
        }
        else{
            res.status(422).send("Username/Email or Password left blank.");
        }
    }
    
});

router.post('/signin', async (req, res)=>{
    const { emailOrName, password } = req.body;
    if(!emailOrName || !password){
        return res.status(422).send("Must enter email/username and password");
    }
    else{
        //Should we add a way to handle the username?
        const user = await Users.findOne({ email: emailOrName });
        if(!user){
            return res.status(404).send("Email/User not found!");
        }
        else{
            try{
                await user.checkPassword(password);
                //Creating token for user for future verification
                const token = jwt.sign({ userID: user.userID },'nskdjfbKDFYfjG');
                res.send({ token });
            }
            catch(err){
                return res.status(422).send("Invalid email or password")
            }
        }
    }
});

module.exports = router;
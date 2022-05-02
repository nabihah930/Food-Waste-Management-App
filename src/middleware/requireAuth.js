//Basically allow an authorized user(the one who has the correct json token) to access our app
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Users = mongoose.model('Users');

//If the request is authorized send it to the next middleware or to the final request handler i.e. the app request handler
module.exports = (req, res, next)=>{
    const { authorization } = req.headers;      //Extract authorization portion from the request header
    // authorization containts 'Bearer <token>'
    if(!authorization){
        return res.status(401).send({ error: "You must be signed in to continue."});
    }
    else{
        const token = authorization.replace('Bearer ','');
        jwt.verify(token,'nskdjfbKDFYfjG', async (err, payload)=>{
            //payload is basically the data stored inside the token returned as an object
            if(err){
                return res.status(401).send({ error: "You must be signed in to continue."});
            }
            else{
                const { userID } = payload;
                //Simply lookup the user in our database
                const user = await Users.findOne({userID});     //findOne() accepts an object
                console.log(user);
                //Assign the user to our 'req' object
                req.user = user;                                //This way if any other request handlers want info on the current user they can easily get it
                next();
            }
        });
    }
};
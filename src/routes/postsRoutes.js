//Contains all logic regarding dashboard posts
// import { getPostDetails, getCurrentDate } from '../components/postFunctions';
// const getPostDetails = require('../components/postFunctions/getPostDetails');
// const getCurrentDate = require('../components/postFunctions/getCurrentDate');

// import { getCurrentDate } from "../components/postFunctions";
const express = require('express');
const mongoose = require('mongoose');
const authorize = require('../middleware/requireAuth');
const Posts = mongoose.model('Posts');
const Users = mongoose.model('Users');

function getPostDetails(posterID){
    postType = '';
    if(posterID.includes("PDN") || posterID.includes("EDN"))
        postType = 'Donation';
    else
        postType = 'Request';
    return postType;
}

function getCurrentDate(){
    const today = new Date();
    const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return date+' '+time;
}

//Obj. that allows us to associate some num. of route handlers with it
const router = express.Router();
router.use(authorize);

//Do NOT use req.user.userID for poster's and responder's id since MongoDB needs an objectID as a reference
router.post('/createPost', async (req, res)=>{
    //let { posterID, responderID, location, description, postType, quantity ,phone ,image ,foodDate ,postDate ,postStatus } = req.body;
    let { responderID, location, description, quantity ,phone ,image ,foodDate } = req.body;
    console.log(req.body);
    //Setting date-time of the post
    // const today = new Date();
    // const date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
    // const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // const postDate = date+' '+time;
    const postDate = getCurrentDate();
    const postType = getPostDetails(req.user.userID);
    // console.log(postDate);
    const posterID = responderID = req.user._id;
    try{
        const post = new Posts({ posterID, responderID, location, description, postType, quantity ,phone ,image ,foodDate ,postDate });
        await post.save();
        res.send({posterID, responderID, location, description, postType, quantity ,phone ,image ,foodDate ,postDate });
    }
    catch(err){
        const message = err.message;
        res.status(422).send(message);
    }
});

router.get('/getPosts', async (req, res)=>{
    // const posts = await Posts.find({posterID: req.user._id});
    const posts = await Posts.find();                           //Return all posts made on dashboard
    //const user = await Users.findOne({ email:  });
    res.send(posts);
});

module.exports = router;
//Contains all logic regarding user profile editing
const express = require('express');
const mongoose = require('mongoose');
const authorize = require('../middleware/requireAuth');
const Users = mongoose.model('Users');

const router = express.Router();
router.use(authorize);

//To get user's profile
router.get('/getProfile', async (req, res)=>{
    const profile = await Users.find({posterID: req.user._id});
    res.send(profile);
});


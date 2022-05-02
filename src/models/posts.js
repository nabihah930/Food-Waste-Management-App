const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    coords:{
        latitude: Number,
        longitude: Number,
        altitude: Number
    }
});

const postSchema = new mongoose.Schema({
    posterID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    responderID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        default: 'ADM001'
    },
    //location: [pointSchema]
    location:{
        type: String,
    },
    description:{
        type: String
    },
    postType:{
        type: String
    },
    quantity:{
        type: Number
    },
    phone:{
        type: String
    },
    image:{
        type: String,
        default: '../../images/foodDoodleLight.jpg'
    },
    foodDate:{
        type: Date
    },
    postDate:{
        type: Date
    },
    postStatus:{
        type: String,
        default: 'UNANSWERED'
    }
});

mongoose.model('Posts', postSchema);
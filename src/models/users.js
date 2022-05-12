const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//This will basically map to the collection present in our MongoDB Database
const userSchema = new mongoose.Schema({
    userID:{
        type: String,
        unique: true,
        required: true
    },
    name:{
        type: String
    },
    email:{
        type: String,
        unique: true,
    },
    password:{
        type: String
    },
    phoneNumber:{
        type: String
    }, 
    address:{
        type: String
    },
    profilePic:{
        type: String,
        default: '../../images/icons/avatarIcon.png'
    }
});
//Salting & Hashing the password
//This is a pre-save hook i.e. a function that is going to run before we actually save an instance of user to the database
userSchema.pre('save', function (next){
    const user = this;
    if(!user.isModified('password')){
        return next();
    }
    else{
        bcrypt.genSalt(12, (err, salt)=>{
            if(err)
                return next(err);
            else{
                bcrypt.hash(user.password, salt, (err, hash)=>{
                    if(err)
                        return next(err);
                    else{
                        user.password = hash;
                        next();
                    }
                });
            }
        });
    }
});
//Addding a method to this model to check password entered at login with the one that is stored inside the database.
userSchema.methods.checkPassword = function(insertedPassword){
    const user = this;
    //Using a promise so that we can use the async-await syntax
    return new Promise((resolve, reject) => {
        bcrypt.compare(insertedPassword, user.password, (err, isCorrect)=>{
            if(err)
                return reject(err);
            else if(!isCorrect)
                return reject(false);
            else
                resolve(true);
        });
    });
}

//This line should be exe. only once since you can not re-define the same model again and again
mongoose.model('Users', userSchema);
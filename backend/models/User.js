const mongoose = require('mongoose');

//schema

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    birthday:{
        type: Date,
        required: true
    },
    creationdate: {
        type: Date,
        default: Date.now
    },
    friends:{
        type: Array,
        required: false
    },
    settings:{
        type: Array,
        required: false
    }
});


module.exports = mongoose.model('Users', UserSchema);
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
    creationdate: {
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('Users', UserSchema);
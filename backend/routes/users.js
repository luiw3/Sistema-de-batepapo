const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/',(req,res)=>{
    const user = User.find().then(data=>{
        res.json(data);
    });
});

router.get('/:postId', async (req,res)=>{
    const user = await User.findById(req.params.postId);
    res.json(user);
});

router.post('/',(req,res)=>{
    const user = new User({
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
    });

    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err=>{
        res.json(err);
    });
});

module.exports = router;
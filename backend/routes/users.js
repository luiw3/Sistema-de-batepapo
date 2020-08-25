const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/',(req,res)=>{
    const user = User.find().then(data=>{
        res.json(data);
    });
});

router.get('/:userId', async (req,res)=>{
    const user = await User.findById(req.params.userId);
    res.json(user);
});

router.post('/',(req,res)=>{
    const user = new User({
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        birthday: req.body.birthday
    });

    user.save()
    .then(data => {
        res.json(data);
    })
    .catch(err=>{
        res.json(err);
    });
});

router.put('/:userId', async (req,res)=>{
   const user = await User.findOneAndUpdate(req.params.userId,{
    name: req.body.name,
    username: req.body.username,
   },{
       returnOriginal: true
   },(e,d,r)=>{
       if(e){
           res.send(e)
       } else {
           console.log(d);
           console.log(r);
       }
   });
   res.json(user);
});


router.delete('/', async (req,res)=>{
    const user = await User.deleteOne({
        name: req.body.name
    });
    res.json(user.deletedCount);
});

module.exports = router;
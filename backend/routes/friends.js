const express = require('express');
const router = express.Router();

const User = require('../models/User');
const updateFriend = require('../util/Util');

router.get('/solicitacoes/:userId', async (req,res)=>{
    let user = await User.findById(req.params.userId);
    let friendsAr = [];
    for (let i = 0; i< user.friends.length; i++){
        if(user.friends[i].friendStatus == 'Pendente'){
            let friends = await User.findById(user.friends[i].friendId)
            friendsAr.push(friends);
        }
    }
    res.json(friendsAr);
});

router.post('/solicitacoes/:userId', async (req,res) => {
    let user = await User.findById(req.body.uId);
    User.updateOne({"_id" : user._id ,"friends.friendId" : req.params.userId},{
        $set :{"friends.$.friendStatus" : 'Aceito'}
    },
    (err) =>{
     
    }
    ).then((r) => {
        console.log(r);
    }).catch(er => {
        console.log(er)
    });
    //updateFriend(user._id,req.params.userId, User);
    //updateFriend(req.params.userId,user._id, User);
    res.json(user);
})

router.post('/:userId', async (req,res)=>{
    let user = await User.findByIdAndUpdate(req.params.userId,{
        $addToSet:{"friends": {"friendId": req.body.friendId, "friendStatus": 'Pendente'}}
    },{
        useFindAndModify: false
    },(e,r)=>{

    }).catch((e)=> res.send(e));
    res.json(user)
})

module.exports = router;

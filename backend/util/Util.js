function updateFriends(userId, FriendId, User){
    console.log(userId);
    console.log(FriendId);
    User.updateOne({"_id" : userId, "friends.friendId" : FriendId},{
        $set :{"friends.$.friendStatus" : 'Aceito'}
    },
    (err) =>{
     
    }
    ).then((r) => {
        console.log(r);
    }).catch(er => {
        console.log(er)
    });
}

module.exports = updateFriends;
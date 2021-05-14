json.set! @friendship.id do 
    json.id @friendship.id
    json.friendId @friendship.friend_id
    json.userName @friendship.friend.username
end    
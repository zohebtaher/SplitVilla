json.user do
    json.username user.username
    json.email user.email
    json.friendCount user.friends.length
    json.requestsAsRequestor user.requests_as_requestor
    json.requestsAsReceiver user.requests_as_receiver
    json.friendships user.friendships



end 

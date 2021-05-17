@users.each do  |user|
    json.set! user.id do 
        json.id user.id
        json.username user.username
        json.email user.email
        json.requestsAsReceiver user.requests_as_receiver
    end
end
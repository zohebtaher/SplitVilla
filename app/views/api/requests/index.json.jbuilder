@requests.each do |request|
    json.set! request.id do

        json.id request.id
        json.requestorId request.requestor.id
        json.userName request.requestor.username
    end
end    

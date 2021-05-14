json.set! @request.id do
    json.id @request.id
    json.requestorId @request.requestor_id
    json.receiverId @request.receiver_id
end 
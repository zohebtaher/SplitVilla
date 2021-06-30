@comments.each do |comment|
    json.set! comment.id do 
        json.author_id comment.author_id
        json.bill_id  comment.bill_id
        json.content comment.content
        json.bill comment.bill
        json.author comment.author
        json.id comment.id
    end
end




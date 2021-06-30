@bills.each do |bill|
    json.set! bill.id do 
        json.settleUp bill.settle_up
        json.amount bill.amount
        json.category bill.category
        json.description bill.description
        json.authorId bill.author_id
        json.lenderId bill.lender_id
        json.owerId bill.ower_id
        json.splitEqually bill.split_equally
        json.lenderPaid bill.lender_paid
        json.lenderOwed bill.lender_owed
        json.owerPaid bill.ower_paid
        json.owerOwed bill.ower_owed
        json.lenderName bill.lender.username
        json.owerName bill.ower.username
        json.comments bill.comments 
    
        json.id bill.id
    end
end

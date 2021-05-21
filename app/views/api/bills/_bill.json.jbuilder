created_at = bill.created_at.to_date
updated_at = bill.updated_at.to_date

lender_net = bill.lender_paid.to_f - bill.ower_owed.to_f
ower_net = bill.ower_paid.to_f - bill.lender_owed.to_f


lender = {
    userId: bill.lender_id,
    paidAmount: bill.lender_paid,
    owedAmount: bill.lender_owed,
    netBalance: lender_net.to_s
}

ower = {
    userId: bill.ower_id,
    paidAmount: bill.ower_paid,
    owedAmount: bill.ower_owed,
    netBalance: ower_net.to_s
}

 users = [lender, ower]
 
    json.settled bill.settled
    json.amount bill.amount
    json.category bill.category
    json.createdAt created_at
    json.updatedAt updated_at
    json.id bill.id
    json.description bill.description
    json.authorId bill.author_id
    json.lenderId bill.lender_id
    json.owerId bill.ower_id
    json.split bill.split
    json.lenderPaid bill.lender_paid
    json.lenderOwed bill.lender_owed
    json.owerPaid bill.ower_paid
    json.owerOwed bill.ower_owed
    json.groups users
  
    
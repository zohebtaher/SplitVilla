# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username:"Chase", email:'chase@gmail.com', password: 'password')
User.create(username:"Zuma", email:'zuma@gmail.com', password: 'password')
User.create(username:"Rocky", email:'rocky@gmail.com', password: 'password')
User.create(username:"Sky", email:'sky@gmail.com', password: 'password')
User.create(username:"Rubble", email:'rubble@gmail.com', password: 'password')
User.create(username:"Marshal", email:'marshal@gmail.com', password: 'password')

# Bill.create(
#     split_equally: true,
#     author_id: 1,
#     ower_id: 2,
#     lender_id: 1,
#     amount: '4.00', 
#     lender_paid: '4.00',
#     lender_owed: '2.00',
#     ower_paid: '0',
#     ower_owed: '2.0',
#     category: "groceries", 
#     description: "Candy", 
#     settle_up:false, 

# )

# Bill.create(
# author_id:3,
# ower_id: 3,
# lender_id: 1,
# amount: '10.00', 
# lender_paid: '0',
# lender_owed: '5',
# ower_paid: '10',
# ower_owed: '5',
# category: "groceries", 
# description: "Salsa", 
# split_equally: true,
# settle_up: false 
# )

# Bill.create(
# settle_up: false, 
# split_equally: true,
# author_id: 4,
# ower_id: 1,
# lender_id: 4,
# amount: '20', 
# lender_paid: '20',
# lender_owed: '10',
# ower_paid: '0',
# ower_owed: '10',
# category: "groceries", 
# description: "Salsa" 
# )

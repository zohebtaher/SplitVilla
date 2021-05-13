# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_13_033809) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bills", force: :cascade do |t|
    t.integer "author_id", null: false
    t.integer "lender_id", null: false
    t.integer "ower_id", null: false
    t.string "description", null: false
    t.string "category", null: false
    t.boolean "split", null: false
    t.string "lender_paid", null: false
    t.string "lender_owed", null: false
    t.string "ower_paid", null: false
    t.string "ower_owed", null: false
    t.boolean "settled", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["lender_id"], name: "index_bills_on_lender_id"
    t.index ["ower_id"], name: "index_bills_on_ower_id"
  end

  create_table "friendships", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "friend_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "friend_id"], name: "index_friendships_on_user_id_and_friend_id", unique: true
  end

  create_table "requests", force: :cascade do |t|
    t.integer "requestor_id", null: false
    t.integer "receiver_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.boolean "exist", default: true, null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end

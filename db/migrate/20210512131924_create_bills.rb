class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.integer :author_id, null: false
      t.integer :lender_id, null: false
      t.integer :ower_id, null: false
      t.string :description, null: false
      t.string :category, null: false
      t.boolean :split, null: false
      t.string :lender_paid, null: false
      t.string :lender_owed, null: false
      t.string :ower_paid, null: false
      t.string :ower_owed, null: false
      t.boolean :settled, null: false

      t.timestamps


    end
    add_index :bills, :lender_id
    add_index :bills, :ower_id
  end
end

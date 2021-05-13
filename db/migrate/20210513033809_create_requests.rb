class CreateRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :requests do |t|
      t.integer :requestor_id, null: false
      t.integer :receiver_id, null: false

      t.timestamps
      
    end
  end
end

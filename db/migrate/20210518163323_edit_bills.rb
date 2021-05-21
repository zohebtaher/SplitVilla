class EditBills < ActiveRecord::Migration[5.2]
  def change
    add_column :bills , :amount, :string
  end
end

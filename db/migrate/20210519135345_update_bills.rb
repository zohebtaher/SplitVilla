class UpdateBills < ActiveRecord::Migration[5.2]
  def change
    rename_column :bills, :split, :split_equally
    rename_column :bills, :settled, :settle_up 
  end
end

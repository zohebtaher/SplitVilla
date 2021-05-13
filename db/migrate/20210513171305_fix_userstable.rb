class FixUserstable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :exist
  end
end

class UpdateComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :author_id, :integer, null: false
    add_column :comments, :bill_id, :integer, null: false
    add_column :comments, :content, :string, null: false
    add_column :comments, :created_at, :datetime, null: false
    add_column :comments, :updated_at, :datetime, null: false
    add_index :comments, :author_id
    add_index :comments, :bill_id
  end
end

class Comment < ApplicationRecord
    validates :author_id, :bill_id, :content, presence: true

    belongs_to :bill,
    primary_key: :id,
    foreign_key: :bill_id,
    class_name: :Bill

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
end
class Bill < ApplicationRecord

    validates :description, presence: true
    validates :category, presence: true
    validates :amount, presence: true
    validates :lender_id, :ower_id, :lender_paid, :lender_owed, presence: true
    validates :ower_paid, :ower_owed, presence: true
    validates :settle_up, :split_equally, inclusion:{in: [true,false]}


    belongs_to :lender,
        primary_key: :id,
        foreign_key: :lender_id,
        class_name: :User

    belongs_to :ower,
        primary_key: :id,
        foreign_key: :ower_id,
        class_name: :User

end
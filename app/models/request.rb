class Request < ApplicationRecord

    validates :requestor_id, uniqueness:{scope: :receiver_id}


    belongs_to :requestor, class_name: :User
    belongs_to :receiver, class_name: :User
end
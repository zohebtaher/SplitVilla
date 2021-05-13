class Friendship < ApplicationRecord
    validates :user_id, uniqueness: {scope: :friend_id}

    belongs_to :user, class_name: :User
    belongs_to :friend, class_name: :User

    

end
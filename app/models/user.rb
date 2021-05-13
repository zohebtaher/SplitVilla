class User < ApplicationRecord

    validates :email, presence: true, uniqueness: true
    validates :username, presence: true
    validates :password_digest, presence: true
    validates :session_token, presence: true
    validates :exist, inclusion: {in: [true, false]}
    validates :password, length:{minimum: 6}, allow_nil: true

    attr_reader :password
    after_initialize  :ensure_session_token

        has_many :requests_as_requestor,
            foreign_key: :requestor_id,
            class_name: :Request,
            dependent: :destroy
        
        has_many :requests_as_receiver,
            foreign_key: :receiver_id,
            class_name: :Request,
            dependent: :destroy

        has_many :friendships,
            foreign_key: :user_id,
            class_name: :Friendship,
            dependent: :destroy

        has_many :friends,
            through: :friendships,
            dependent: :destroy


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil 
    end
    
    def password=(password)
        @password = password
        self.password_digest= BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end


end
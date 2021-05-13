class API::FriendshipsController < ApplicationController
    before_action :require_logged_in, only [:create, :index]

    def index 
        @friendships = Friendship
    end
end
class API::FriendshipsController < ApplicationController
    before_action :require_logged_in, only [:create, :index]

    def index 
        @friendships = Friendship.where(user_id: params[:user_id])
    end


    def create
        
        @friendship1 = Friendship.new(req_params)  #user_id: user_id, friend_id: friend_d
        @friendship2 = Friendship.new(user_id: req_params.dig(:friend_id), friend_id: req_param.dig(:user_id))
        @request = Request.find_by(receiver_id: req_params.dig(:user_id), requestor_id: req_params.dig(:friend_id))

            if @friendship1.save && @friendship2.save
                @request.destroy
                render '/api/friendships/show', status: 201
            else
                render json: ['Couldnt create friendship'], status: 422
            end
    end


    def destroy 
        @receiver_side = Friendship.find_by(user_id: Friendship.find_by(id: params[:id].user_id))
        @friend_side = friendship.find_by(friend_id: Friendship.find_by(id: params[:id].user_id))
            if @receiver_side.destroy && @friend_side.destroy 
                @friendships = Friendship.where(user_id: current_user.id)
                render 'api/friendships/index'
            else
                render json: ["Something went wrong"], status: 422
            end
    end

    private
    def req_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end

    private
    def req_params
        params.require(:friendship).permit(:user_id, :friend_id)
    end
end
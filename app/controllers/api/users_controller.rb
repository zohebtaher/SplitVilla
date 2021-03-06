class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user 
            render :show
        else
            render json: ['Could not find user']
        end
    end

    def index 
        @users = User.all
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
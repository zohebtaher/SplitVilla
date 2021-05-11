class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            render json: ['Oops. Wrong email or password'], status: 401
        else
            login!(@user)
            render 'api/users/show';
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {message:'Logout successful' }
        else
            render json: ['You are logged out already'], status: 404
        end
    end
end
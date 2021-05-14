class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception 

    helper_method :current_user , :logged_in?

    def login!(user)
        @current_user = user
        session[:session_token] = @current_user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

    def current_user
        
     @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_out
        redirect_to user_url(current_user) if logged_in?
    end
    def require_logged_in
        if !logged_in?
            render json:["Invalid credentials"], status: 401
        end
            
        
    end
end

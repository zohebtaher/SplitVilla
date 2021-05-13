class API::RequestsController < ApplicationController
    before_action :require_logged_in, only [:create, :destroy]

    def index 
        @requests = Request.where(receiver_id: params[:user_id])

    end

    def create
        @request = Request.new(req_params)
            if @request.save 
                @requestor = User.find_by(id: params[:request][:requestor_id])
                @receiver = User.find_by(id: params[:request][:receiver_id])
                    render 'api/requests/show'
            else
                render json: @request.errors.full_messages, status: 422
            end

    end

    def destroy
        @request = Request.find_by(id: params[:id])
            if @request.destroy
                @requests = Request.where(receiver_id: current_user.id)
                render 'api/requests/index'
            else
                render json: @request.errors.full_messages, status: 422
            end

    end
    private

    def req_params
        params.require(:request).permit(:requestor_id, :receiver_id)

    end
end
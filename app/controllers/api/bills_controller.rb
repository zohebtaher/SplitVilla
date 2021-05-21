class Api::BillsController < ApplicationController

    def create
        @bill = Bill.new(bill_params)
            if @bill.save
                render :show
            else 
              render json: @bill.errors.full_messages, status: 402
            end
    end

    def index 
        user = User.find_by(id: current_user.id)
        @bills = user.bills.to_a
        owed_bills = user.owed_bills.to_a
        @bills.concat(owed_bills)
        render :index
    end

    def update
        @bill = Bill.find_by(id: params[:id])
        
            if @bill.update(bill_params)
                render :show
            else 
                render json: @bill.errors.full_messages, status: 402

            end
    end

    def destroy
        @bill = Bill.find_by(id: params[:id])
            if @bill
                @bill.destroy
                render :show
            else
                render json: ["Bill could not be found"], status: 404
            end
    end

    def show
        @bill = Bill.find_by(id: params[:id])
            if @bill
                render :show
            else
                render json: ["Bill could not be found"], status: 404
            end
    end


    private
    def bill_params
        params.require(:bill).permit(:author_id,:lender_id, :ower_id, :description,
        :category, :split_equally, :lender_paid, :lender_owed, :ower_paid, :ower_owed, 
        :settle_up, :amount)
    end




end
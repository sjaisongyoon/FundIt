class Api::BackingsController < ApplicationController
    def create
        @backing = Backing.new(backing_params)
        if @backing.save
            render :show
        else
            render json: @backing.errors.full_messages, status: 404
        end
    end
    
    def show
    end
    
    private
    
    def backing_params
        params.require(:backing).permit(:reward_id, :backer_id)
    end

end

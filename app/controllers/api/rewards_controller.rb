class Api::RewardsController < ApplicationController

    def create
        @reward = Reward.new(reward_params)
        @reward.project_id = params[:project_id]
        @project = Project.includes(:rewards).find(@reward.project_id)
        if @reward.save
            render "/api/projects/show"
        else
            render json: @reward.errors.full_messages, status: 404
        end
    end

    def index
        @rewards = Reward.where(project_id: params[:project_id])
    end

    private

    def reward_params
        params.require(:reward).permit(:title, :description, :delivery_date,
            :ship_loc, :cost)
    end

end

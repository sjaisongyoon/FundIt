class Api::ProjectsController < ApplicationController
    
    before_action :logged_in?, only: [:create, :update]

    def index
        @projects = Project.all
    end

    def show
        @project = Project.find(params[:id])
    end
    
    def create 
        @project = Project.new(project_params)
        @project.author_id = current_user.id

        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 404
        end
    end

    def update
        
        @project = Project.find_by(id: params[:id])

        unless current_user.id == @project.author_id
            render json: ["Invalid Permissions"], status 404 and return
        end
        
        if @project.update_attributes(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 404
        end

    end

    def destroy
        project = Project.find_by(id: params[:id])

        unless current_user.id == project.author_id
            render json: ["Invalid Permissions"], status 404 and return
        end

        Project.destroy(project.id)
        render json :index
    end

    private 

    def project_params
        params.require(:project).permit(:title, :description, :amount_pledged,
            :pledge_goal, :end_date, :category_id, :location, :campaign)
    end

end

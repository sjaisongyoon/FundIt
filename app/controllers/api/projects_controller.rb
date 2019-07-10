class Api::ProjectsController < ApplicationController
    
    before_action :logged_in?, only: [:create, :update]

    def index
        @projects = Project.includes(:author).all
    end

    def show
        @project = Project.find(params[:id])
    end

    def featured 
        @projects = Project.includes(:author).first(10)
        render :featured_projects
    end
    
    def create 
        format_end_date = Date.strptime(params[:project][:end_date], '%Y-%m-%d')
        params[:project][:end_date] = format_end_date
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
            render json: ["Invalid Permissions"], status: 404
            return
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
            render json: ["Invalid Permissions"], status: 404 
            return
        end

        Project.destroy(project.id)
        render :index
    end

    private 

    def project_params
        params.require(:project).permit(:title, :description, :amount_pledged,
            :pledge_goal, :end_date, :category_id, :location, :campaign, :photo)
    end

end

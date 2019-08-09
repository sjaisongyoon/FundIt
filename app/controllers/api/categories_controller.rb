class Api::CategoriesController < ApplicationController

    def show
        @projects = Project.where(category_id: params[:id]).includes(:author).all
    end

end

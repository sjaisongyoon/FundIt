class Api::CategoriesController < ApplicationController

    def index
        @categories = Category.all
    end

    def show
        @projects = Project.where(category_id: params[:id]).includes(:author).all
        @category = Category.find(params[:id])
    end

end

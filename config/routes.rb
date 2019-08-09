Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :projects, only: [:create, :destroy, :index, :show, :update] do 
      resources :rewards, only: [:create, :index]
    end
    resources :categories, only: [:show]
    resources :backings, only: [:create, :show]
    get '/featured', to: 'projects#featured', as: :featured_projects
  end
  
end

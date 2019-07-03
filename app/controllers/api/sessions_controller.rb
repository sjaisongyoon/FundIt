class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login!(@user)
      render '/api/users/show.json.jbuilder'
    else
      render json: ["Invalid Credentials"], status: 404
    end

  end

  def destroy
    logout!
    render json: {}, status: 200
  end

end

class UsersController < ApplicationController
  def user_by_id
    @user = User.find(params[:id])

    render json: @user
  end
  
  def current
    user = current_user

    render json:
      {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        picture_url: user.picture_url,
        goals: user.goals
      }
  end
end

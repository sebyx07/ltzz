module Api
  module V1
    class SessionsController < ApplicationController
      def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
          session[:user_id] = user.id
          render nothing: true
        else
          render nothing: true, status: 422
        end
      end

      def destroy
        reset_session
        render nothing: true
      end
    end
  end
end
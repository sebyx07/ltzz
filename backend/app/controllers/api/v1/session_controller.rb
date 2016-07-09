module Api
  module V1
    class SessionController < ApplicationController
      def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
          session[:user_id] = user.id
          head :ok
        else
          head :not_found
        end
      end

      def destroy
        reset_session
        head :ok
      end
    end
  end
end
module Api
  module V1
    class BaseController < ApplicationController
      include JSONAPI::ActsAsResourceController

      def current_user
        User.find_by(id: cookies.signed[:user_id])
      end

      protected :current_user
    end
  end
end
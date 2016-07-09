module Api
  module V1
    class BaseController < ApplicationController
      include JSONAPI::ActsAsResourceController

      def current_user
        User.find_by(id: cookies.signed)
      end

      protected :current_user
    end
  end
end
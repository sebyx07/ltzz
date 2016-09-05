module Api
  module V1
    class BaseController < ApplicationController
      include JSONAPI::ActsAsResourceController
      skip_before_filter :ensure_correct_media_type
      skip_before_filter :ensure_valid_accept_media_type

      def current_user
        User.find_by(id: cookies.signed[:user_id])
      end

      protected :current_user
    end
  end
end
module Api
  module V1
    class UsersController < Api::V1::BaseController
      def current
        user = current_user
        if user
          render json: JSONAPI::ResourceSerializer.new(Api::V1::UserResource, include: ['organization'])
              .serialize_to_hash(Api::V1::UserResource.new(user, nil))
        else
          head :not_found
        end
      end
    end
  end
end
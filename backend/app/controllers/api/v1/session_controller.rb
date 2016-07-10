module Api
  module V1
    class SessionController < ApplicationController
      def create
        user = User.find_by(username: params[:username])
        if user && user.authenticate(params[:password])
          login(user)
          render json: json_user(user)
        else
          head :not_found
        end
      end

      def register
        unless passwords_match?
          return render json: {errors: ['Passwords do not match']}, status: :unprocessable_entity
        end

        unless tos_accepted?
          return render json: {errors: ['Term of service must be accepted']}, status: :unprocessable_entity
        end

        result = create_user_and_organization
        user = result[0]
        organization = result[1]

        if user.persisted? && organization.persisted?
          login(user)
          render json: json_user(user)
        else
          render json: {errors: {user: user.errors, organization: organization.errors}}
        end
      end

      def destroy
        cookies.delete(:user_id)
        head :ok
      end

      def user_register_params
        {username: params[:username], password: params[:password], name: params[:name]}
      end

      def passwords_match?
        params[:password] == params['confirmPassword']
      end

      def tos_accepted?
        params[:tos]
      end

      def create_user_and_organization
        organization = Organization.new(name: params['organizationName'])
        user = User.new(user_register_params.merge!(organization: organization))

        ActiveRecord::Base.transaction do
          organization.save!
          user.save!
        end

        [user, organization]
      end

      def login(user)
        cookies.signed[:user_id] = user.id
      end

      def json_user(user)
        JSONAPI::ResourceSerializer.new(Api::V1::UserResource, include: ['organization'])
            .serialize_to_hash(Api::V1::UserResource.new(user, nil))
      end

      private :user_register_params, :passwords_match?, :create_user_and_organization
    end
  end
end
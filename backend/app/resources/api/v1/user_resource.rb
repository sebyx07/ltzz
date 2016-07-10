module Api
  module V1
    class UserResource < JSONAPI::Resource
      model_name 'User'
      attributes :username, :name, :avatar
      has_one :organization
      has_many :private_messages

      filters :username
    end
  end
end
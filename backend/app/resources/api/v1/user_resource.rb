class Api::V1::UserResource < JSONAPI::Resource
  model_name 'User'
  attributes :username, :name, :avatar
  has_one :organization
end

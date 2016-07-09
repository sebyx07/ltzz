class Api::V1::OrganizationResource < JSONAPI::Resource
  model_name 'Organization'

  attributes :name
  has_many :users
end

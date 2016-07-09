module Api
  module V1
    class OrganizationResource < JSONAPI::Resource
      model_name 'Organization'

      attributes :name
      has_many :users
    end
  end
end

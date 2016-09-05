module Api
  module V1
    class GroupResource < JSONAPI::Resource
      model_name 'Group'
      attributes :name

      has_many :group_messages
    end
  end
end

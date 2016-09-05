module Api
  module V1
    class GroupMessageResource < JSONAPI::Resource
      model_name 'GroupMessage'

      attributes :payload, :created_at
      has_one :sender
    end
  end
end

module Api
  module V1
    class PrivateMessageResource < JSONAPI::Resource
      key_type :string

      attributes :payload, :receiver_seen, :created_at

      has_one :sender, class_name: 'User'
      has_one :receiver, class_name: 'User'
    end
  end
end
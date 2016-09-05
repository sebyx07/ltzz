module Api
  module V1
    class GroupMessageNotificationResource < JSONAPI::Resource
      model_name 'GroupMessageNotification'

      attributes :not_seen_count

      has_one :group, :user
    end
  end
end

module Api
  module V1
    class PrivateMessagesController < Api::V1::BaseController
      def index
        conv_id = params['filter']['conversation_id']
        messages = PrivateMessage.where(sender_id: conv_id)
        messages_serialized = messages.map {|m| Api::V1::PrivateMessageResource.new(m, nil)}

        serialize = JSONAPI::ResourceSerializer.new(Api::V1::PrivateMessageResource)
                        .serialize_to_hash(messages_serialized)

        render json: serialize
      end
    end
  end
end
class PrivateMessage
  include Mongoid::Document
  include Mongoid::Timestamps::Created
  include ActiveMongoid::Associations

  field :receiver_seen, type: Boolean
  field :payload, type: String

  belongs_to_record :sender, class_name: 'User'
  belongs_to_record :receiver, class_name: 'User'
end
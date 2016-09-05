class User < ApplicationRecord
  has_secure_password

  belongs_to :organization, optional: true

  def private_messages
    PrivateMessage.where('private_messages.sender_id = :user_id OR private_messages.receiver_id = :user_id', user_id: self.id)
  end
end

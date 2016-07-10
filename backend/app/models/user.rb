class User < ApplicationRecord
  has_secure_password

  belongs_to :organization, optional: true

  def private_messages
    PrivateMessage.any_of({sender_id: self.id}, {receiver_id: self.id}).to_a
  end
end

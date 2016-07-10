class User < ApplicationRecord
  has_secure_password

  belongs_to :organization, optional: true
  has_many :private_messages

  def private_messages
    PrivateMessage.any_of({sender_id: self.id}, {receiver_id: self.id})
  end
end

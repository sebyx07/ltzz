class PrivateMessage
  include Mongoid::Document

  field :sender_id, type: Integer
  field :receiver_id, type: Integer
  field :receiver_seen, type: Boolean
  field :payload, type: String

  def sender=(user)
    self.sender_id = user.id
  end

  def sender
    User.find_by(id: sender_id)
  end

  def receiver=(user)
    self.receiver_id = user.id
  end

  def receiver
    User.find_by(id: receiver_id)
  end
end
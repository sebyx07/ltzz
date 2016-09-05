class PrivateMessage < ApplicationRecord
  belongs_to :sender, foreign_key: :sender_id
  belongs_to :receiver, foreign_key: :receiver_id
end
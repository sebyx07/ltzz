class GroupMessage < ApplicationRecord
  belongs_to :group
  belongs_to :sender, foreign_key: :sender_id, class_name: 'User'
end

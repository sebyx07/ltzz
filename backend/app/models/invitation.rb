class Invitation < ApplicationRecord
  belongs_to :user, optional: true
end

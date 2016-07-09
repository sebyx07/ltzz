class User < ApplicationRecord
  has_secure_password

  belongs_to :organization, optional: true
end

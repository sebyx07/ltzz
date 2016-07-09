class User < ApplicationRecord
  belongs_to :organization, optional: true
end

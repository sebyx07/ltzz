class AddCreatedAtToPrivateMessages < ActiveRecord::Migration[5.0]
  def change
    add_column(:private_messages, :created_at, :datetime)
  end
end

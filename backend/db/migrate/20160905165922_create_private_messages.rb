class CreatePrivateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :private_messages do |t|
      t.boolean :receiver_seen
      t.boolean :payload
      t.text :payload
    end

    add_column :private_messages, :sender_id, :integer, references: :users, foreign_key: true
    add_column :private_messages, :receiver_id, :integer, references: :users, foreign_key: true
  end
end

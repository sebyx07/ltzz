class CreateGroupMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :group_messages do |t|
      t.text :payload
      t.references :group, foreign_key: true

      t.timestamps
    end

    add_column :group_messages, :sender_id, :integer, references: :users, foreign_key: true
  end
end

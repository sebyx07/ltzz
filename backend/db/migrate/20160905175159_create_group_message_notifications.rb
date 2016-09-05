class CreateGroupMessageNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :group_message_notifications do |t|
      t.references :user, foreign_key: true
      t.references :group, foreign_key: true
      t.integer :not_seen_count

      t.timestamps
    end
  end
end

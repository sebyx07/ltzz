class CreateInvitations < ActiveRecord::Migration[5.0]
  def change
    create_table :invitations, id: :uuid do |t|
      t.references :user, foreign_key: true
      t.boolean :used

      t.timestamps
    end
  end
end

class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :avatar
      t.string :password_digest
      t.references :organization, foreign_key: true

      t.timestamps
    end
  end
end

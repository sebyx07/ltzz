# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160905175159) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "uuid-ossp"

  create_table "group_message_notifications", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "group_id"
    t.integer  "not_seen_count"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["group_id"], name: "index_group_message_notifications_on_group_id", using: :btree
    t.index ["user_id"], name: "index_group_message_notifications_on_user_id", using: :btree
  end

  create_table "group_messages", force: :cascade do |t|
    t.text     "payload"
    t.integer  "group_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "sender_id"
    t.index ["group_id"], name: "index_group_messages_on_group_id", using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "name"
    t.integer  "organization_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["organization_id"], name: "index_groups_on_organization_id", using: :btree
  end

  create_table "invitations", id: :uuid, default: -> { "uuid_generate_v4()" }, force: :cascade do |t|
    t.integer  "user_id"
    t.boolean  "used"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_invitations_on_user_id", using: :btree
  end

  create_table "organizations", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "private_messages", force: :cascade do |t|
    t.boolean  "receiver_seen"
    t.text     "payload"
    t.integer  "sender_id"
    t.integer  "receiver_id"
    t.datetime "created_at"
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.string   "name"
    t.string   "avatar"
    t.string   "password_digest"
    t.integer  "organization_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["organization_id"], name: "index_users_on_organization_id", using: :btree
  end

  add_foreign_key "group_message_notifications", "groups"
  add_foreign_key "group_message_notifications", "users"
  add_foreign_key "group_messages", "groups"
  add_foreign_key "groups", "organizations"
  add_foreign_key "invitations", "users"
  add_foreign_key "users", "organizations"
end

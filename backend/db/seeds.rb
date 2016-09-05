organization = FactoryGirl.create(:organization, name: 'LtzOrganization')
user_1 = FactoryGirl.create(:user, username: 'user1', password: '1234', organization: organization)
user_2 = FactoryGirl.create(:user, username: 'user2', password: '1234', organization: organization)
group_1 = FactoryGirl.create(:group, name: 'General', organization: organization)
group_2 = FactoryGirl.create(:group, name: 'Dota', organization: organization)

FactoryGirl.create_list(:private_message, 5, sender: user_1, receiver: user_2, receiver_seen: false)
FactoryGirl.create_list(:private_message, 5, sender: user_2, receiver: user_1, receiver_seen: false)
FactoryGirl.create_list(:private_message, 2, sender: user_1, receiver: user_2)

FactoryGirl.create_list(:group_message, 2, sender: user_1, group: group_1)
FactoryGirl.create_list(:group_message, 2, sender: user_2, group: group_1)


FactoryGirl.create(:group_message_notification, user: user_1, not_seen_count: 2, group: group_1)
FactoryGirl.create(:group_message_notification, user: user_2, not_seen_count: 2, group: group_1)
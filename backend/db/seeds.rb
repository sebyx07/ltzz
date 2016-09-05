organization = FactoryGirl.create(:organization, name: 'LtzOrganization')
user_1 = FactoryGirl.create(:user, username: 'user1', password: '1234', organization: organization)
user_2 = FactoryGirl.create(:user, username: 'user2', password: '1234', organization: organization)

FactoryGirl.create_list(:private_message, 5, sender: user_1, receiver: user_2, receiver_seen: false)
FactoryGirl.create_list(:private_message, 5, sender: user_2, receiver: user_1, receiver_seen: false)

FactoryGirl.create_list(:private_message, 2, sender: user_1, receiver: user_2)
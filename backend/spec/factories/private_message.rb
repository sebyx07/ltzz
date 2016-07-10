FactoryGirl.define do
  factory :private_message do
    receiver_seen false
    payload 'Payload'
  end
end

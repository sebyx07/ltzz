Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      jsonapi_resources :users do
        jsonapi_relationships
        collection do
          get 'current'
        end

        member do
          post 'upload-avatar', to: :upload_avatar
        end
      end

      [
          :organizations, :private_messages, :groups, :group_messages, :group_message_notifications
      ].each do |res|
        jsonapi_resources res
      end

      namespace :session do
        post 'register', action: :register
        post '', action: :create
        delete '', action: :destroy
      end
    end
  end
end

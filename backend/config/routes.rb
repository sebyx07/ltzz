Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      jsonapi_resources :users do
        collection do
          get 'current'
        end

        member do
          post 'upload-avatar', to: :upload_avatar
        end
      end

      jsonapi_resources :organizations

      namespace :session do
        post 'register', action: :register
        post '', action: :create
        delete '', action: :destroy
      end
    end
  end
end

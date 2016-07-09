Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      jsonapi_resources :users do
        collection do
          get 'current'
        end
      end

      resource :sessions, only: [:create, :destroy]
    end
  end
end

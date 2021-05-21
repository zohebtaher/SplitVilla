Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:show, :create, :index] do
      resources :friendships, only:[:index]
      resources :requests, only:[:index]
    end
    resource :session, only: [:create, :destroy]
    resources :requests, only:[:create, :destroy]
    resources :friendships, only:[:create, :destroy]
    resources :bills, only:[:show, :index, :create, :destroy, :update]
  end

  root "static_pages#root"
end

Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :users, only: [:index, :edit, :update, :create, :destoroy]
  resources :groups, only: [:new, :edit, :create, :update] do
    resources :comments, only: [:index, :create]
  end
end

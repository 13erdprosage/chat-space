Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resources :user, only: [:edit, :update]
  resources :users, only: [:index, :edit, :update, :show]
  resources :groups, only: [:new, :edit, :create, :update] do
    resources :comments, only: [:index, :create]
  end
end

Rails.application.routes.draw do
  devise_for :users
  root 'comments#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :edit, :create, :update] do
    resources :comments, only: [:index, :create]
  end
end

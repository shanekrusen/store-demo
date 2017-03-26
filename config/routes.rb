Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static#index'
  
  resources :categories, only: :index
  
  get 'order_cookies/:action', :controller => :order_cookies
end

Rails.application.routes.draw do
  resources :goals
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/users/current', to: 'users#current'
end

Rails.application.routes.draw do
  resources :administrators
  root "dishes#homepage"

  resources :dishes do
    collection do
      get "homepage"
    end
  end
  resources :ingredients
  resources :enterprises
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

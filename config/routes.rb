Rails.application.routes.draw do
  namespace :api do 
    resources :blogs do
      resources :posts
    end
  end

  get '*other', to: 'static#index'
end

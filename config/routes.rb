Rails.application.routes.draw do
  get '/' => 'pages#index'
  post '/donuts' => 'pages#create'

  namespace :api do
    namespace :v1 do
      get '/donuts' => 'donuts#index'
    end
  end
end

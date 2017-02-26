Rails.application.routes.draw do
  get '/' => 'pages#index'
  post '/donuts' => 'pages#create'

  namespace :api do
    namespace :v1 do
      get '/alldonuts' => 'donuts#index'
      get '/donutstoday' => 'donuts#today'
      get '/donutshistory' => 'donuts#history'
      post '/donuts' => 'donuts#create'
    end
  end
end

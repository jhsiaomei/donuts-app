class PagesController < ApplicationController
  def index
    # donuts_array = Unirest.get("http://localhost:3000/api/v1/donuts.json").body

    donuts_today = Donut.where(date: Date.today)
    if donuts_today.length > 0
      @message = "Congratulations, there are donuts today!"
    else
      @message = "Sorry, there are no donuts today"
    end
  end

  def create
    Donut.create(
      brand: params[:brand],
      number: params[:number],
      name: params[:name],
      date: Date.today
      )

    redirect_to "/"
  end
end

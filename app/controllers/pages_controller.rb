class PagesController < ApplicationController
  def index
    donuts_today = Donut.where(date: Date.today)
    if donuts_today.length > 0
      @message = "YAS!"
    else
      @message = "NO :("
      @class = " response-no"
    end
  end

  # def create
  #   Donut.create(
  #     brand: params[:brand],
  #     number: params[:quantity],
  #     name: params[:name],
  #     date: Date.today
  #     )
  # end
end

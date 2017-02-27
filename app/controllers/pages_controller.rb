class PagesController < ApplicationController
  def index
    date_today = Date.today.strftime("%m/%e/%Y")
    donuts_today = Donut.where(date: date_today)

    if donuts_today.length > 0
      @message = "YAS!"
    else
      @message = "NO :("
      @class = " response-no"
    end
  end
end

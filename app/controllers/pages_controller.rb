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
end

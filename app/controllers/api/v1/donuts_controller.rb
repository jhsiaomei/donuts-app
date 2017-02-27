class Api::V1::DonutsController < ApplicationController
  def index
    @donuts = Donut.all
  end

  def today
    todays_date = Date.today.strftime("%m/%e/%Y")
    @donuts = Donut.where(date: todays_date)
  end

  def history
    todays_date = Date.today.strftime("%m/%e/%Y")
    @donuts = Donut.where.not(date: todays_date).order("created_at desc").limit(3)
  end

  def create
    Donut.create(
      brand: params[:brand],
      number: params[:number],
      name: params[:name],
      date: Date.today.strftime("%m/%e/%Y")
    )

    render :json => { }, :status => 200
  end
end

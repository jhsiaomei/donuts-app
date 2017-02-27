class Api::V1::DonutsController < ApplicationController
  def index
    @donuts = Donut.all
  end

  def today
    @donuts = Donut.where(date: Date.today)
  end

  def history
    @donuts = Donut.where.not(date: Date.today).order("created_at desc").limit(3)
  end

  def create
    p "====="
    p Date.today.strftime("%m/%e/%Y")
    p "====="

    Donut.create(
      brand: params[:brand],
      number: params[:number],
      name: params[:name],
      date: Date.today
    )

    render :json => { }, :status => 200
  end
end

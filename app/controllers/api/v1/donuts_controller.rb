class Api::V1::DonutsController < ApplicationController
  def index
    @donuts = Donut.all
  end
end

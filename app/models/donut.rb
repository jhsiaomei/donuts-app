class Donut < ActiveRecord::Base
  validates_presence_of :brand, :number, :name
  validates_numericality_of :number, :allow_nil => false, :greater_than_or_equal_to => 1
end

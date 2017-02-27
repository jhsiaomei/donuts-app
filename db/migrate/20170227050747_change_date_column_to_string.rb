class ChangeDateColumnToString < ActiveRecord::Migration
  def change
    change_column :donuts, :date, :string
  end
end

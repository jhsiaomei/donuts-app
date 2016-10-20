class AddDateToDonuts < ActiveRecord::Migration
  def change
    add_column :donuts, :date, :date
  end
end

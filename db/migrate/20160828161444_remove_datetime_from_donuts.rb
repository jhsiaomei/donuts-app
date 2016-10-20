class RemoveDatetimeFromDonuts < ActiveRecord::Migration
  def change
    remove_column :donuts, :datetime, :datetime
  end
end

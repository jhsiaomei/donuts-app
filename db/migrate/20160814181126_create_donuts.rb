class CreateDonuts < ActiveRecord::Migration
  def change
    create_table :donuts do |t|
      t.datetime :datetime
      t.string :brand
      t.integer :number
      t.string :name
      t.timestamps null: false
    end
  end
end

class CreateDishes < ActiveRecord::Migration[5.1]
  def change
    create_table :dishes do |t|
      t.string :description
      t.decimal :price
      t.time :timePreparation

      t.timestamps
    end
  end
end

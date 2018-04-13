class CreateDishesIngredientsJoinTable < ActiveRecord::Migration[5.1]
  def change
    create_join_table :ingredients, :dishes do |t|
      # t.index [:ingredient_id, :dish_id]
      # t.index [:dish_id, :ingredient_id]
    end
  end
end

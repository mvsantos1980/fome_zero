class Dish < ApplicationRecord
  has_and_belongs_to_many :ingredients
  validates_presence_of :description, :price, :timePreparation
end

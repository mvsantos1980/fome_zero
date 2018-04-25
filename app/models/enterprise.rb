class Enterprise < ApplicationRecord
  validates_presence_of :name, :address, :telephone, :email
end

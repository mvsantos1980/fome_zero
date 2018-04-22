class CreateAdministrators < ActiveRecord::Migration[5.1]
  def change
    create_table :administrators do |t|
      t.string :user
      t.string :password

      t.timestamps
    end
  end
end
